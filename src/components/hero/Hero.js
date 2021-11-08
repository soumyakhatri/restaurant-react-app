import React from 'react'
import Navbar from '../navbar/Navbar'
import HeroSection from './HeroSection'

function Hero() {
    return (
        <div className="hero" id='hero'>
            <Navbar/>
            <HeroSection/>
        </div>
    )
}

export default Hero
