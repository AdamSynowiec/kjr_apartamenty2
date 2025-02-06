import React from 'react'

const Contact = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-12 w-full h-full absolute -z-10">
        <div className="col-span-6 bg-[#FAF2E9]"></div>
        <div className="col-span-6 bg-[#292929]"></div>
      </div>
      <div className="container max-w-[1596px] mx-auto px-6">
        <div className="grid grid-cols-12">
          <div className="col-span-3 bg-[#FAF2E9] flex flex-col py-24">
          <h2 className='font-poppins text-[#C2A992] text-[65px] font-extralight max-w-[537px] mb-6'>Kontakt</h2>
            <div className="">
              <h4 className='font-poppins font-extralight mb-1'>Dane firmowe</h4>
              <ul className='font-poppins font-extralight mb-10'>
                <li>Nazwa fimry Sp. z o. o</li>
                <li>ul. Ulica 0/0</li>
                <li>30-219 Kraków</li>
                <li>NIP 0000000000</li>
                <li>KRS 0000000000</li>
              </ul>
              <h4 className='font-poppins font-extralight mb-1'>Adres biura sprzedaży</h4>
              <ul className='font-poppins  font-extralight'>
                <li>ul. Ulica 0/0</li>
                <li>ul. Ulica 0/0</li>
                <li>30-219 Kraków</li>
              </ul>
            </div>
          </div>
          <div className="col-span-9 bg-[#292929] flex flex-col py-24 pl-24">
          <h2 className='font-poppins text-white text-[65px] font-extralight max-w-[537px] mb-6'>Napisz do nas</h2>
            <div className="">

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact