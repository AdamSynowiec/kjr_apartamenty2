import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="min-h-[100px]">
      <div className="grid grid-cols-12 min-h-[100px]">
        <div className="col-span-12 bg-[#292929]">
          <div className="container max-w-[1596px] mx-auto flex flex-row justify-between items-center h-full px-6 md:px-0">
            <span className='text-[#707070] font-poppins text-xs'>Copyright by krj307-2.pl - 2025</span>
            <ul>
              <li className='text-gray-500 text-sm'>
                <Link to={"https://krj307-2.pl/upload/krj307-2.pdf"} target="_blank" className='underline hover:no-underline'>Polityka prywatności</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer