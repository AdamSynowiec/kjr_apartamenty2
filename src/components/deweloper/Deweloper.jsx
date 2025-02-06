import React from 'react'
import KGD from '../../assets/images/KGD.png'

const Deweloper = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-12 w-full h-full absolute -z-10">
        <div className="col-span-9 bg-[#C2A992]"></div>
        <div className="col-span-3 bg-white"></div>
      </div>
      <div className="container max-w-[1596px] mx-auto px-6 py-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6 flex flex-col items-start justify-center">
            <h2 className='font-poppins text-white text-[65px] font-extralight max-w-[537px] mb-6'>O deweloperze</h2>
            <p className='font-poppins text-white font-extralight max-w-[715px] text-lg'>KRJ DEVELOPMENT SP. Z O.O. SP.K. stanowi część Krakowskiej Grupy Deweloperskiej (KGD) - wiodącego konsorcjum specjalizującego się w realizacji inwestycji premium
              w najbardziej prestiżowych lokalizacjach Krakowa, ze szczególnym uwzględnieniem Woli Justowskiej.
              <br />
              <br />
              Portfolio KGD to szereg zrealizowanych z sukcesem projektów, które wyróżniają się najwyższą jakością wykonania
              i bezkompromisowym podejściem do detali. Każda nasza inwestycja to starannie przemyślana koncepcja, łącząca kameralny charakter z ponadczasową elegancją.
              Obecnie, bazując na naszym doświadczeniu, planujemy rozwój działalności w kolejnych dzielnicach Krakowa.</p>
          </div>
          <div className="col-span-6 relative flex flex-col items-start justify-center">
            <img src={KGD} alt="" className='max-h-[777px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deweloper