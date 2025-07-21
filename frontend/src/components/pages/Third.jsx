import React from 'react'
import JudgesImage from '../../assets/judges.png'

const Third = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-mono font-extrabold text-white uppercase tracking-[0.25em] [text-shadow:_0_0_1px_white,_0_0_10px_white] text-center lg:text-left">
            JUDGES  
          </h1>
          <img src={JudgesImage} alt="judges" className='mt-4'/>
    </div>
  )
}

export default Third
