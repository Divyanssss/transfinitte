import React from 'react'

import abhibusLogo from '../../assets/sponsers/abhibus.svg'
import bharatXLogo from '../../assets/sponsers/bharatX.svg'
import boeingLogo from '../../assets/sponsers/boeing.svg'
import crewsphereLogo from '../../assets/sponsers/crewsphere.svg'
import gfgLogo from '../../assets/sponsers/gfg.svg'
import netconLogo from '../../assets/sponsers/netcon.svg'
import pathwayLogo from '../../assets/sponsers/pathway.svg'
import Faq from './Faq'
import Footer from './footer'

const Fourth = () => {
  return (
    <div>
        <Faq />
        <h1 className="font-mono font-extrabold text-white uppercase tracking-[0.25em] [text-shadow:_0_0_1px_white,_0_0_10px_white] text-center lg:text-left" style={{ fontSize: '3rem' }}>
            SPONSORS 
          </h1>
          <div className="logos">
            <div className="slide-animation">
                <img src={abhibusLogo} alt="Abhibus" />
                <img src={bharatXLogo} alt="BharatX" />
                <img src={boeingLogo} alt="Boeing" />
                <img src={crewsphereLogo} alt="Crewsphere" />
                <img src={gfgLogo} alt="GeeksforGeeks" />
                <img src={netconLogo} alt="Netcon" />
                <img src={pathwayLogo} alt="Pathway" />
                <img src={abhibusLogo} alt="Abhibus" />
                <img src={bharatXLogo} alt="BharatX" />
                <img src={boeingLogo} alt="Boeing" />
                <img src={crewsphereLogo} alt="Crewsphere" />
                <img src={gfgLogo} alt="GeeksforGeeks" />
                <img src={netconLogo} alt="Netcon" />
                <img src={pathwayLogo} alt="Pathway" />
            </div>
           
          </div>
          
    </div>
  )
}

export default Fourth
