import React, { useEffect } from 'react'
import Hero from './components/Hero'


import { About } from './components/About'
import './styles/Home2.css'
import Scroller from './components/Scroller'
import { BouncyCardsFeatures } from './components/Resources'

import Aos from 'aos';
import 'aos/dist/aos.css';

function Home2() {
  useEffect(() => {
    Aos.init({ duration: 700 });
  })
  return (
    <>
    <div className="homepage-body bg-black "  >
      <div className="" >
        <Hero />
      </div>
    <div  className="About" data-aos="fade-up">
        <About/>
        </div>
        <div className="bg-black" data-aos="fade-up">
          <Scroller/>
        </div>
    <div className="Bottom  bg-black" data-aos="fade-up">
        <BouncyCardsFeatures/>
        </div>

    
    
    
    </div>

    </>
  )
}

export default Home2