import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Config } from '../../Config';
import { Link } from 'react-router-dom';

const API_URL = "https://krj307-2.pl/acp/api/content/items/treekrjapartments?sort={_o:1}";
const API_KEY = Config.auth.API_KEY;

const Apartaments = () => {
  const [apartamentsData, setApartamentsData] = useState([]);
  const [selectedApartment, setSelectedApartment] = useState(null);

  useEffect(() => {
    if (selectedApartment) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedApartment]);

  const calcPriceM2 = (price, area) => {

    if (!price || !area) return 0;

    const numericPrice = Number(price.toString().replace(/\s/g, ''));
    const pricePerM2 = numericPrice / area;
    const rounded = Math.floor(pricePerM2 * 100) / 100;
    return rounded.toLocaleString('pl-PL', {
      maximumFractionDigits: 2,
    });
  };

  const getLatestPrice = (priceArray, fallback) => {
    if (!priceArray || priceArray.length === 0) return fallback;
    const latest = priceArray[priceArray.length - 1];
    return latest.h_price;
  };

  useEffect(() => {
    fetch(API_URL, {
      method: "GET",
      headers: {
        "api-key": API_KEY,
      },
    })
      .then(response => response.json())
      .then(data => {

        const apartments = data.map(item => ({
          id: item.krj_buildingNumber,
          is_garage: item?.is_garage ? item.is_garage : false,
          rooms: item.krj_rooms,
          area: `${item.krj_apartmentArea}m2`,
          garden: `${item.krj_garden}m2`,
          priceM2: calcPriceM2(getLatestPrice(item.history_price, item.krj_price), item.krj_apartmentArea || 0),
          price: getLatestPrice(item.history_price, item.krj_price),
          history_price: item.history_price || [],
          status: item.krj_status,
          images: item.krj_apartmentPlan?.map(img => `${Config.base.url}${Config.cms.rootDir}${Config.cms.mediaDir}${img.path}`) || [],
        }));
        setApartamentsData(apartments);
      })
      .catch(error => console.error("Error fetching apartments:", error));
  }, []);

  return (
    <section id="apartamenty">
      <div className="relative">
        <div className="grid grid-cols-12 w-full h-full absolute -z-10">
          <div className="col-span-12 bg-[#FAF2E9]"></div>
        </div>
        <div className="container max-w-[1596px] mx-auto px-6">
          <div className="grid grid-cols-12">
            <div className="col-span-12 py-12 md:py-16">
              <h2 className='font-poppins text-[#856F5B] text-4xl md:text-5xl lg:text-[65px] font-extralight mb-12 md:mb-24'>APARTAMENTY</h2>
              <div className="bg-[#856F5B]">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-[#C2A992] text-white font-poppins h-[95px]">
                        <th className="py-2 px-4 text-[18px] text-center border-b border-[#FAF2E9]">Nr Budynku</th>
                        <th className="py-2 px-4 text-[18px] text-center border-b border-[#FAF2E9]">Liczba pokoi</th>
                        <th className="py-2 px-4 text-[18px] text-center border-b border-[#FAF2E9]">Powierzchnia</th>
                        <th className="py-2 px-4 text-[18px] text-center border-b border-[#FAF2E9]">Ogród/Taras</th>
                        <th className="py-2 px-4 text-[18px] text-center border-b border-[#FAF2E9]">Cena za m<sup>2</sup></th>
                        <th className="py-2 px-4 text-[18px] text-center border-b border-[#FAF2E9]">Cena</th>
                        <th className="py-2 px-4 text-[18px] text-center border-b border-[#FAF2E9]">Status</th>
                        <th className="py-2 px-4 text-[18px] text-center border-b border-[#FAF2E9]">Szczegóły</th>
                      </tr>
                    </thead>
                    <tbody>
                      {apartamentsData?.map((apt, index) => (
                        <tr key={index}>
                          <td className="py-2 px-4 text-[18px] text-center border-b border-[#FAF2E9] text-[#C9B29D] h-[100px]">{apt.id}</td>
                          <td className="py-2 px-4 text-[18px] text-center border-b border-[#FAF2E9] text-[#C9B29D]">{apt.is_garage ? "-" : apt.rooms}</td>
                          <td className="py-2 px-4 text-[18px] text-center border-b border-[#FAF2E9] text-[#C9B29D]">{apt.area}</td>
                          <td className="py-2 px-4 text-[18px] text-center border-b border-[#FAF2E9] text-[#C9B29D]">{apt.is_garage ? "-" : apt.garden}</td>
                          <td className="py-2 px-4 text-[18px] text-center border-b border-[#FAF2E9] text-[#C9B29D]">{apt.is_garage ? "-" : apt.priceM2 + " zł"}</td>
                          <td className="py-2 px-4 text-[18px] text-center border-b border-[#FAF2E9] text-[#C9B29D]">{apt.price + " zł"}</td>
                          <td className={`py-2 px-4 text-[18px] text-center border-b border-[#FAF2E9] ${apt.status === 'Wolny' ? 'text-green-500' : apt.status === 'Zarezerwowany' ? 'text-yellow-500' : 'text-red-300'}`}>
                            {apt.status}
                          </td>
                          <td
                            className="py-2 px-4 text-[18px] text-center border-b border-[#FAF2E9] text-[#C9B29D] hover:underline cursor-pointer"
                            onClick={() => setSelectedApartment(apt)}
                          >
                            Zobacz
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-cols-12">
            <div className="flex flex-row gap-4 items-center justify-end text-center mx-auto pb-12 md:pb-16">
              <Link to={'/historia-cen'} className='font-poppins font-extralight text-[16px] text-[#696969] underline hover:no-underline'>Historia cen</Link>
            </div>
          </div>
        </div>
      </div>

      {selectedApartment && (
        <motion.div
          className="z-50 fixed inset-0 bg-white flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex flex-col items-center justify-center bg-white p-6 w-full h-full max-h-[90vh] overflow-auto"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <div className="flex flex-col overflow-y-auto gap-4 max-w-[90%] max-h-[80vh]">
              {selectedApartment.images?.map((img, index) => (
                <img key={index} src={img} alt={`Rzut ${selectedApartment.id} - ${index + 1}`} className="max-h-full w-auto" />
              ))}
            </div>
            <button className="absolute top-[4%] right-[2%]" onClick={() => setSelectedApartment(null)}>
              <svg className="w-8 h-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18 17.94 6M18 18 6.06 6" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Apartaments;
