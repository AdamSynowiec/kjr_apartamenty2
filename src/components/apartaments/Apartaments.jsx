import React from 'react'

const Apartaments = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-12 w-full h-full absolute -z-10">
        <div className="col-span-12 bg-[#FAF2E9]"></div>
      </div>
      <div className="container max-w-[1596px] mx-auto px-6">
        <div className="grid grid-cols-12">
          <div className="col-span-12 py-24">
            <h2 className='font-poppins text-[#856F5B] text-[65px] font-extralight max-w-[537px] mb-24'>APARTAMENTY</h2>
            <div className="bg-[#856F5B]">
              <div class="overflow-x-auto">
                <table class="min-w-full bg-white ">
                  <thead>
                    <tr class="bg-[#C2A992] text-white font-poppins h-[95px]">
                      <th class="py-2 px-4 font-light text-[18px] text-center h-[100px] border-b border-[#FAF2E9]">Nr Budynku</th>
                      <th class="py-2 px-4 font-light text-[18px] text-center h-[100px] border-b border-[#FAF2E9]">Liczba pokoi</th>
                      <th class="py-2 px-4 font-light text-[18px] text-center h-[100px] border-b border-[#FAF2E9]">Powierzchnia</th>
                      <th class="py-2 px-4 font-light text-[18px] text-center h-[100px] border-b border-[#FAF2E9]">Ogród</th>
                      <th class="py-2 px-4 font-light text-[18px] text-center h-[100px] border-b border-[#FAF2E9]">Cena</th>
                      <th class="py-2 px-4 font-light text-[18px] text-center h-[100px] border-b border-[#FAF2E9]">Status</th>
                      <th class="py-2 px-4 font-light text-[18px] text-center h-[100px] border-b border-[#FAF2E9]">Szczegóły</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="text-gray-700 ">
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D]">A1</td>
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D]">3</td>
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D]">79m2</td>
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D]">5m2</td>
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D]">750,000zł</td>
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D] text-green-500">Wolny</td>
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D] hover:underline cursor-pointer">Zobacz</td>
                    </tr>
                    <tr class="text-gray-700 ">
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D]">A1</td>
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D]">3</td>
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D]">79m2</td>
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D]">5m2</td>
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D]">750,000zł</td>
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D] text-green-500">Wolny</td>
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D] hover:underline cursor-pointer">Zobacz</td>
                    </tr>
                    <tr class="text-gray-700 ">
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D]">A1</td>
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D]">3</td>
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D]">79m2</td>
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D]">5m2</td>
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D]">750,000zł</td>
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D] text-green-500">Wolny</td>
                      <td class="py-2 px-4 font-base text-[18px] text-center h-[100px] border-b border-[#FAF2E9] text-[#C9B29D] hover:underline cursor-pointer">Zobacz</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apartaments