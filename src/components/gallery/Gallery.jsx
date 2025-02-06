import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import KRJ_3___001 from '../../assets/images/KRJ_3___001.png'
import KRJ_3___003 from '../../assets/images/KRJ_3___003.png'
import KRJ_M1_ANTRESOLA from '../../assets/images/KRJ_M1_ANTRESOLA.png'
import KRJ_M1_PARTER1 from '../../assets/images/KRJ_M1_PARTER1.png'
import KRJ_M1_POZIOM_1_B from '../../assets/images/KRJ_M1_POZIOM_1_B.png'
import KRJ_M1_POZIOM_1 from '../../assets/images/KRJ_M1_POZIOM_1.png'
import KRJ_NOCNE__002 from '../../assets/images/KRJ_NOCNE__002.png'


const images = [
  KRJ_M1_ANTRESOLA,
  KRJ_M1_PARTER1,
  KRJ_M1_POZIOM_1_B,
  KRJ_M1_POZIOM_1,
  KRJ_NOCNE__002,
  KRJ_3___001,
  KRJ_3___003,
];

function PhotoGallery() {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragged, setDragged] = useState(false);
  const [calcWidth, setCalcWith] = useState(true);

  // Obliczenie szerokości do przesuwania
  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        );
      }
    };

    updateWidth(); // Wywołanie funkcji na start

    window.addEventListener("resize", updateWidth); // Aktualizacja przy zmianie rozmiaru okna

    return () => window.removeEventListener("resize", updateWidth); // Czyszczenie listenera
  }, [calcWidth]);

  // Funkcja obsługująca kliknięcie
  const handleImageClick = (src) => {
    if (!dragged) {
      setSelectedImage(src);
    }
  };

  return (
    <div className="py-24">
      <div className="container max-w-[1596px] mx-auto px-6">
        <h2 className="font-poppins text-[#856F5B] text-[65px] font-extralight max-w-[537px] mb-24">Galeria</h2>
      </div>
      <div className="overflow-hidden w-full px-4">
        {/* Główny kontener karuzeli */}
        <motion.div
          ref={carouselRef}
          className="flex cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          onDragStart={() => setDragged(true)} // Ustawienie flagi na true podczas przeciągania
          onDragEnd={() => setDragged(false)} // Resetowanie flagi po zakończeniu przeciągania
          onMouseEnter={() => { setCalcWith(!calcWidth) }}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] md:min-w-[550px] mr-4 "
              onClick={() => !dragged && handleImageClick(src)} // Kliknięcie tylko jeśli nie było drag
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Powiększone zdjęcie */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)} // Zamknięcie zdjęcia po kliknięciu
            >
              <motion.img
                src={selectedImage}
                alt="Enlarged"
                className="rounded-lg shadow-2xl w-[90%] h-auto max-w-4xl"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default PhotoGallery;
