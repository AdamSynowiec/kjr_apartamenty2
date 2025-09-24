import React from 'react'
import { Link } from 'react-router-dom'
import image3 from '../../assets/images/3.png'

const Cta = () => {
    return (
        <div className="bg-[#FAF2E9]">
            <div className='container max-w-[1596px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 py-12 gap-6'>
                
                {/* Kolumna 1 */}
                <div className="text-center min-h-[300px] rounded-[50px] flex flex-col items-center justify-center gap-4 relative overflow-hidden p-10 bg-[#C2A992]">
                    <div className="lg:w-2/3 relative z-10">
                        <h2 className='font-poppins text-white text-2xl sm:text-5xl md:text-6xl lg:text-[54px] font-extralight mb-2'>
                            STANDARD WYKOŃCZENIA
                        </h2>
                        <span className='text-md md:text-xl font-light leading-relaxed text-white max-w-[715px] block'>
                            Inwestycja realizowana z wysokiej klasy materiałów — trwałość, precyzja wykonania i nowoczesne technologie.
                        </span>
                    </div>
                    <div className="lg:w-1/3 relative z-10">
                        <div className="flex lg:justify-center">
                            <Link 
                                to={'https://krj307-2.pl/upload/Standard%20wyko%C5%84czenia%20KRJ307-2.pdf'} 
                                target='_blank'
                            >
                                <button className='text-white uppercase font-poppins py-4 px-4 border hover:bg-white hover:text-[#C2A992] transition-all w-full md:w-auto cursor-pointer'>
                                    Dowiedz się więcej
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="absolute right-0 top-0 bottom-0 w-1/2 z-0 opacity-[0.1] pointer-events-none"
                        style={{
                            backgroundImage: `
                              linear-gradient(to right,rgb(255, 255, 255) 10%, transparent 50%),
                              url('${image3}')
                            `,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center bottom',
                            backgroundRepeat: 'no-repeat, no-repeat',
                            mixBlendMode: 'multiply',
                        }}
                    ></div>
                </div>

                {/* Kolumna 2 */}
                <div className="text-center min-h-[300px] rounded-[50px] flex flex-col items-center justify-center gap-4 relative overflow-hidden p-10 bg-[#C2A992]">
                    <div className="lg:w-2/3 relative z-10">
                        <h2 className='font-poppins text-white text-2xl sm:text-5xl md:text-6xl lg:text-[54px] font-extralight mb-2'>
                            PROSPEKT INWESTYCYJNY
                        </h2>
                        <span className='text-md md:text-xl font-light leading-relaxed text-white max-w-[715px] block'>
                            Inwestycja realizowana z wysokiej klasy materiałów — trwałość, precyzja wykonania i nowoczesne technologie.
                        </span>
                    </div>
                    <div className="lg:w-1/3 relative z-10">
                        <div className="flex lg:justify-center">
                            <Link 
                                to={'https://krj307-2.pl/upload/Prospekt-KRJ-3.pdf'} 
                                target='_blank'
                            >
                                <button className='text-white uppercase font-poppins py-4 px-4 border hover:bg-white hover:text-[#C2A992] transition-all w-full md:w-auto cursor-pointer'>
                                    Dowiedz się więcej
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="absolute right-0 top-0 bottom-0 w-1/2 z-0 opacity-[0.1] pointer-events-none"
                        style={{
                            backgroundImage: `
                              linear-gradient(to right,rgb(255, 255, 255) 10%, transparent 50%),
                              url('${image3}')
                            `,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center bottom',
                            backgroundRepeat: 'no-repeat, no-repeat',
                            mixBlendMode: 'multiply',
                        }}
                    ></div>
                </div>

            </div>
        </div>
    )
}

export default Cta
