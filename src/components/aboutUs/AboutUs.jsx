import React from 'react'
import image1 from '../../assets/images/image1.png'
const AboutUs = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-12 w-full h-full absolute -z-10">
        <div className="col-span-9 bg-[#FAF2E9]"></div>
        <div className="col-span-3 bg-white"></div>
      </div>
      <div className="container max-w-[1596px] mx-auto px-6 py-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6 flex flex-col items-start justify-center">
            <h2 className='font-poppins text-[#856F5B] text-[65px] font-extralight max-w-[537px] mb-6'>Rezydencja Królowej Jadwigi</h2>
            <p className='font-poppins text-[#313131] font-extralight max-w-[715px] text-lg'>II etap prestiżowej inwestycji w najbardziej pożądanej dzielnicy Krakowa. W sercu Woli Justowskiej powstaje kolejna ekskluzywna enklawa, gdzie natura spotyka się z miejskim luksusem. To miejsce stworzone dla tych, którzy cenią sobie kameralną atmosferę przy jednoczesnym szybkim dostępie do wszystkich udogodnień miasta. Zaledwie kilka minut dzieli Cię od tętniącego życiem Starego Miasta, podczas gdy otaczająca zieleń tworzy atmosferę prywatnego azylu.</p>
          </div>
          <div className="col-span-6 relative flex flex-col items-start justify-center ">
            <img src={image1} alt="" className='max-h-[777px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs