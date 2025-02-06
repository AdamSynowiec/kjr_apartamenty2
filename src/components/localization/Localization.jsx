import React from 'react'
import image1 from '../../assets/images/image1.png'

const Localization = () => {
  return (
    <div className="bg-[#FAF2E9] pb-24">
      <div className="container max-w-[1596px] mx-auto px-6">
        <div className="flex flex-row items-center">
          <div className="flex-1">
            <img src={image1} alt="" className=''/>
          </div>
          <div className="flex-1   bg-[#C2A992] flex flex-col justify-center px-6 py-32">
            <h2 class="font-poppins text-white text-[65px] font-extralight max-w-[537px] mb-6">Lokalizacja</h2>
            <p className='font-poppins text-white font-extralight max-w-[715px] text-lg mb-6'>Drugi etap Rezydencji Królowej Jadwigi powstaje przy ulicy Królowej Jadwigi 307, w ekskluzywnej dzielnicy Wola Justowska - miejscu, które od lat pozostaje synonimem prestiżu i komfortowego życia w Krakowie. Ta wyjątkowa lokalizacja to starannie wyselekcjonowana przestrzeń, gdzie elegancka zabudowa willowa współgra z bogactwem terenów zielonych.</p>
            <p className='font-poppins text-white font-extralight max-w-[715px] text-lg'>Usytuowanie inwestycji zostało przemyślane
              w najdrobniejszych szczegółach - zaledwie kilka minut dzieli mieszkańców od historycznego centrum Krakowa, podczas gdy okoliczne tereny rekreacyjne zachęcają do aktywnego wypoczynku. Rozwinięta infrastruktura, w połączeniu
              z kameralnym charakterem dzielnicy, tworzy idealne warunki do życia dla najbardziej wymagających mieszkańców.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Localization