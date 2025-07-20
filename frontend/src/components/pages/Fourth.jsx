import React from 'react'
import abhibusLogo from '../../assets/sponsers/abhibus.svg'
import bharatXLogo from '../../assets/sponsers/bharatX.svg'
import boeingLogo from '../../assets/sponsers/boeing.svg'
import crewsphereLogo from '../../assets/sponsers/crewsphere.svg'
import gfgLogo from '../../assets/sponsers/gfg.svg'
import netconLogo from '../../assets/sponsers/netcon.svg'
import pathwayLogo from '../../assets/sponsers/pathway.svg'

const Fourth = () => {
  return (
    <div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-mono font-extrabold text-white uppercase tracking-[0.25em] [text-shadow:_0_0_1px_white,_0_0_10px_white] text-center lg:text-left">
            SPONSORS 
          </h1>
          <div className="logos">
            <div className="slide-animation">
                <div className="flex">
                    <img src={abhibusLogo} alt="Abhibus" />
                    <img src={bharatXLogo} alt="BharatX" />
                    <img src={boeingLogo} alt="Boeing" />
                    <img src={crewsphereLogo} alt="Crewsphere" />
                    <img src={gfgLogo} alt="GeeksforGeeks" />
                    <img src={netconLogo} alt="Netcon" />
                    <img src={pathwayLogo} alt="Pathway" />
                </div>
                <div className="flex">
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
    </div>
  )
}

export default Fourth
