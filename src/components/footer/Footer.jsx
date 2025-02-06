import React from 'react'

const Footer = () => {
  return (
    <div className="min-h-[100px]">
      <div className="grid grid-cols-12 min-h-[100px]">
        <div className="col-span-12 bg-[#292929]">
          <div className="container max-w-[1596px] mx-auto flex flex-col justify-center h-full">
            <span className='text-[#707070] font-poppins text-xs'>Copyright by website.pl - 2025</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer