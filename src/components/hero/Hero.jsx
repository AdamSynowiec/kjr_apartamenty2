import React from 'react'
import Hero__bg from '../../assets/images/HeroBg2.mp4'
const Hero = () => {
  return (
    <div className="relative h-svh w-full">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={Hero__bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full"></div>
    </div>
  );
}

export default Hero