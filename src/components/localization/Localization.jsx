import React from "react";
import image1 from "../../assets/images/localization-2.png";
import logo from '../../assets/images/logo-dark.svg'

const Localization = () => {
  return (
    <section id="lokalizacja" className="bg-[#FAF2E9] py-16">
      <div className="container max-w-[1596px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Image Section */}
          <div className="w-full flex relative">
            <img
              src={image1}
              alt="Mapa lokalizacji"
              className="w-full h-full object-cover"
            />
            <div className="bg-white p-4 rounded-br-[30px] rounded-tr-[30px] absolute left-0 -bottom-[24px]">
              <img src={logo} alt="" className="max-w-[150px] z-10 relative" />
              <div className="bg-white w-screen bottom-0 top-0 absolute right-20 z-0"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-[#C2A992] text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Lokalizacja
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed mb-6">
              Drugi etap Residence Królowej Jadwigi powstaje przy ulicy Królowej Jadwigi 307,
              w ekskluzywnej dzielnicy – Woli Justowskiej – miejscu, które od lat pozostaje synonimem prestiżu i komfortowego życia. Ta wyjątkowa lokalizacja to starannie
              wyselekcjonowana przestrzeń, gdzie elegancka zabudowa willowa współgra z bogactwem terenów zielonych.
            </p>
            <p className="text-lg md:text-xl font-light leading-relaxed">
              Usytuowanie inwestycji zostało przemyślane w najdrobniejszych szczegółach –
              zaledwie kilka minut dzieli mieszkańców od historycznego centrum Krakowa, podczas gdy
              okoliczne tereny rekreacyjne zachęcają do aktywnego wypoczynku. Rozwinięta infrastruktura,
              w połączeniu z kameralnym charakterem dzielnicy, tworzy idealne warunki do życia
              dla najbardziej wymagających mieszkańców.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localization;
