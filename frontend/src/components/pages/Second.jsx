import React from 'react'
import Date from '../../assets/date.png'

const Second = () => {
  return (
    <div className="flex items-center justify-between h-full px-8">
      <div className="flex-1">
        <h1 className="font-mono font-extrabold text-white uppercase tracking-[0.25em] [text-shadow:_0_0_1px_white,_0_0_10px_white] text-left" style={{ fontSize: '4rem' }}>
              4 DOMAINS
            </h1>
            <ul className="text-gray-300 mt-6 lg:mt-8 max-w-md lg:max-w-2xl leading-relaxed list-disc list-inside" style={{ fontSize: '1.875rem' }}>
              <li className="hover:text-white hover:[text-shadow:_0_0_10px_white,_0_0_20px_white,_0_0_30px_white] transition-all duration-300 cursor-pointer">SOFTWARE</li>
              <li className="hover:text-white hover:[text-shadow:_0_0_10px_white,_0_0_20px_white,_0_0_30px_white] transition-all duration-300 cursor-pointer">HARDWARE</li>
              <li className="hover:text-white hover:[text-shadow:_0_0_10px_white,_0_0_20px_white,_0_0_30px_white] transition-all duration-300 cursor-pointer">MANAGEMENT</li>
              <li className="hover:text-white hover:[text-shadow:_0_0_10px_white,_0_0_20px_white,_0_0_30px_white] transition-all duration-300 cursor-pointer">ENTREPRENEURSHIP</li>
            </ul>
      </div>
      <div className="flex-1 flex flex-col items-center">
         <h1 className="font-mono font-extrabold text-white uppercase tracking-[0.25em] [text-shadow:_0_0_1px_white,_0_0_10px_white] text-left" style={{ fontSize: '4rem' }}>
              VENUE
            </h1>
            <div className="text-gray-300 mt-2 lg:mt-2 mb-2" style={{ fontSize: '1.8rem' }}>Golden Jubilee Convention Hall</div>
        
        <img src={Date} alt="date" className="w-40 h-auto" />
      </div>
   
    </div>
  )
}

export default Second
