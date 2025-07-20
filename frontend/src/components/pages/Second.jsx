import React from 'react'

const Second = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-mono font-extrabold text-white uppercase tracking-[0.25em] [text-shadow:_0_0_1px_white,_0_0_10px_white] text-center lg:text-left">
            4 DOMAINS-
          </h1>
          <ul className="text-3xl text-gray-300 mt-6 lg:mt-8 max-w-md lg:max-w-2xl leading-relaxed list-disc list-inside">
            <li className="hover:text-white hover:[text-shadow:_0_0_10px_white,_0_0_20px_white,_0_0_30px_white] transition-all duration-300 cursor-pointer">SOFTWARE</li>
            <li className="hover:text-white hover:[text-shadow:_0_0_10px_white,_0_0_20px_white,_0_0_30px_white] transition-all duration-300 cursor-pointer">HARDWARE</li>
            <li className="hover:text-white hover:[text-shadow:_0_0_10px_white,_0_0_20px_white,_0_0_30px_white] transition-all duration-300 cursor-pointer">MANAGEMENT</li>
            <li className="hover:text-white hover:[text-shadow:_0_0_10px_white,_0_0_20px_white,_0_0_30px_white] transition-all duration-300 cursor-pointer">ENTREPRENEURSHIP</li>
          </ul>
    </div>
  )
}

export default Second
