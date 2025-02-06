import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.svg';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/85 h-[100px]' : 'bg-black/50 h-[170px]'
        }`}
    >
      <div className="container max-w-[1596px] mx-auto h-full px-6 ">
        <div className="grid grid-cols-12 h-full">
          {/* Logo Section */}
          <div className="col-span-2 flex items-center justify-start">
            <img
              src={logo}
              alt="Logo"
              className={`transition-all duration-300 ${isScrolled ? 'h-[80px]' : 'h-[128px]'
                }`}
            />
          </div>

          {/* Navigation Section */}
          <nav className="col-span-10 flex items-center justify-end h-full">
            <ul className="flex flex-row gap-[40px] text-[#FAF2E9] text-lg">
              {[
                'O INWESTYCJI', 'APARTAMENTY', 'UDOGODNIENIA',
                'LOKALIZACJA', 'GALERIA', 'O DEWELOPERZE', 'KONTAKT'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;