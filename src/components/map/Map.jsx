import React from 'react';
import InvestMap from '../../assets/images/InvestMap.png';

const Map = () => {
    return (
        <section id="udogodnienia">
            <div className="bg-[#C2A992]">
                <div className="container max-w-[1596px] mx-auto px-6">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 py-12 md:py-24 text-center">
                            <h2 className='font-poppins text-white text-4xl md:text-5xl lg:text-[65px] font-extralight mb-12 md:mb-24'>
                                Infrastruktura i udogodnienia
                            </h2>
                            <img src={InvestMap} alt="" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Map;
