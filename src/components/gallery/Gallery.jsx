import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import image1 from '../../assets/images/1.png'
import image7 from '../../assets/images/7.png'
import image8 from '../../assets/images/8.png'
import image10 from '../../assets/images/10.png'
import image11 from '../../assets/images/11.png'
import image12 from '../../assets/images/12.png'
import image13 from '../../assets/images/13.png'
import image15 from '../../assets/images/15.png'
import image16 from '../../assets/images/16.png'
import image17 from '../../assets/images/17.png'
import image18 from '../../assets/images/18.png'
import image19 from '../../assets/images/19.png'
import image20 from '../../assets/images/20.png'

const images = [
  image15,
  image13,
  image12,
  image16,
  image17,
  image18,
  image19,
  image20,
  image1,
  image7,
  image8,
  image10,
  image11
];

function PhotoGallery() {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragged, setDragged] = useState(false);
  const [calcWidth, setCalcWith] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        );
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [calcWidth]);

  const handleImageClick = (index) => {
    if (!dragged) {
      setCurrentIndex(index);
      setSelectedImage(images[index]);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(images[currentIndex + 1]);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "ArrowRight") {
        handleNext(e);
      } else if (e.key === "ArrowLeft") {
        handlePrev(e);
      } else if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex, images]);

  return (
    <section id="galeria">
      <div className="py-12 md:py-24">
        <div className="container max-w-[1596px] mx-auto px-6">
          <h2 className="font-poppins text-[#856F5B] text-4xl md:text-5xl lg:text-[65px] font-extralight mb-12 md:mb-24">Galeria</h2>
        </div>
        <div className="overflow-hidden w-full px-4 relative">
          <motion.div
            ref={carouselRef}
            className="flex cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            onDragStart={() => setDragged(true)}
            onDragEnd={() => setDragged(false)}
            onMouseEnter={() => setCalcWith(!calcWidth)}
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] md:min-w-[550px] mr-4"
                onClick={() => !dragged && handleImageClick(index)}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto pointer-events-none"
                />
              </motion.div>
            ))}
          </motion.div>

          <AnimatePresence>
            {selectedImage && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
              >
                <button onClick={handlePrev} className="text-white text-3xl p-0 md:px-4"><svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m15 19-7-7 7-7" />
                </svg>
                </button>
                <motion.img
                  src={selectedImage}
                  alt="Enlarged"
                  className="rounded-lg shadow-2xl w-[80%] h-auto max-w-4xl"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.5 }}
                  onClick={(e) => e.stopPropagation()}
                />
                <button onClick={handleNext} className="text-white text-3xl p-0 md:px-4"><svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m9 5 7 7-7 7" />
                </svg>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery;