import React from 'react'
import InvestMap from '../../assets/images/InvestMap.png'
const Map = () => {
    return (
        <div className="bg-[#C2A992]">
            <div className="container max-w-[1596px] mx-auto px-6">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 py-24">
                        <h2 className='font-poppins text-white text-[65px] font-extralight mb-24'>Infrastruktura i udogodnienia</h2>
                        <img src={InvestMap} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Map