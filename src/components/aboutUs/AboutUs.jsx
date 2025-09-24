import React from 'react';
import image1 from '../../assets/images/KRJ_M1_PARTER1_764.png';
import logo from '../../assets/images/logo-dark.svg'

const AboutUs = () => {
  return (
    <section id="o_inwestycji">
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-12 w-full h-full absolute -z-10">
          <div className="col-span-12 md:col-span-9 bg-[#FAF2E9]"></div>
          <div className="col-span-12 md:col-span-3 bg-white"></div>
        </div>
        <div className="md:bg-transparent bg-[#FAF2E9] container max-w-[1596px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-6 flex flex-col items-start justify-center text-center md:text-left">
              <h2 className='font-poppins text-[#856F5B] text-3xl sm:text-4xl md:text-5xl lg:text-[65px] font-extralight max-w-[537px] mb-6'>
                Apartamety Królowej Jadwigi
              </h2>
              <p className='font-poppins text-[#313131] font-extralight max-w-[715px] text-lg md:text-xl '>
                II etap prestiżowej inwestycji w najbardziej pożądanej dzielnicy Krakowa. W sercu Woli Justowskiej powstaje kolejna ekskluzywna enklawa, gdzie natura spotyka się z miejskim luksusem. To miejsce stworzone z myślą o tych, którzy cenią sobie kameralną atmosferę w połączeniu z wygodnym i szybkim dostępem do wszystkich udogodnień miejskiego życia. Zaledwie kilka minut dzieli Cię od tętniącego życiem Starego Miasta, podczas gdy otaczająca zieleń tworzy atmosferę prywatnego azylu.
              </p>
            </div>
            <div className="md:col-span-6 relative flex flex-col items-center md:items-start justify-center">
              <img src={image1} alt="" className='w-full max-w-[777px] h-auto' />
              <div className="bg-[#FAF2E9] p-4 rounded-bl-[30px] rounded-tl-[30px] absolute right-0 -bottom-[24px]">
                <img src={logo} alt="" className="max-w-[150px]" />
                <div className="bg-[#FAF2E9] w-screen bottom-0 top-0 absolute left-20 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
