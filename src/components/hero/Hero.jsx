import React from 'react'
import Hero__bg from '../../assets/images/KRJ_NOCNE__002.jpg'
const Hero = () => {
  return (
    <div className="h-svh" style={{
        backgroundImage: `url(${Hero__bg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }}>

    </div>
  )
}

export default Hero