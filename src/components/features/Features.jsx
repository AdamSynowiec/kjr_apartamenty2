import React from 'react';
import image2 from '../../assets/images/image2.png';
import fan from '../../assets/images/fan.svg';
import clima from '../../assets/images/clima.svg';
import heating from '../../assets/images/heating.svg';
import smarthome from '../../assets/images/smarthome.svg';

const features = [
  { title: 'Wentylacja', img: fan },
  { title: 'Klimatyzacja', img: clima },
  { title: 'Ogrzewanie', img: heating },
  { title: 'Inteligenty dom', img: smarthome },
];

const Features = () => {
  return (
    <div className="relative min-h-svh">
      <div className="grid grid-cols-12 w-full h-full absolute -z-10">
        <div
          className="col-span-12 relative bg-slate-500"
          style={{ backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
      </div>

      <div className="container max-w-[1596px] mx-auto px-6 min-h-svh">
        <div className="grid grid-cols-12 min-h-svh gap-9">
          <div className="col-span-6 py-24 flex flex-col justify-center h-full">
            <h2 className="font-poppins text-white text-[85px] font-extralight max-w-[537px]">
              Wyjątkowe Apartamenty
            </h2>
          </div>
          <div className="col-span-6 flex items-center">
            <div className="bg-[#FAF2E9]/[0.05] w-full aspect-square grid grid-cols-2 grid-rows-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`hover:bg-[#FAF2E9]/[0.15] transition-all flex flex-col items-center justify-center text-center border-[#FAF2E9]/[0.3] ${index % 2 === 0 ? 'border-r' : ''
                    } ${index < 2 ? 'border-b' : ''}`}
                >
                  <h3 className='text-white/[.8] text-[26px] font-poppins font-base drop-shadow-md'>
                    {feature.title}
                  </h3>
                  <img src={feature.img} alt={feature.title} className='my-6' />
                  <span className='font-poppins text-[#FAF2E9] text-[20px] font-extralight drop-shadow-md'>
                    Lorem ipsum dolor sit amet orci aliquam.
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
