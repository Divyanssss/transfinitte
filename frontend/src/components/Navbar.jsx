import React from 'react'
import tflogo from '../assets/tflogo.svg'

export const Navbar = () => {
  return (
    <div className='sticky top-0 flex justify-end items-center p-4 bg-neutral-950 text-white z-50'>
       <div className="flex items-center gap-1 mr-auto">
         <img src={tflogo} className="w-12 h-12" />
         <div className="text-3xl font-bold">RANSFINITTE</div>
       </div>
        <ul className='flex space-x-6 list-none'>
            <li >  <a href='https://www.instagram.com/tc_nitt/?hl=en' target='_blank' rel='noopener noreferrer' className='relative inline-flex h-10 w-full items-center justify-center rounded-md bg-white px-4 font-medium text-gray-950 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
      <div className='absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur' />
     INSTAGRAM
    </a></li>
            <li>
              <button className='relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-6 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
        REGISTER
      </span>
    </button>
</li>
        </ul>
    </div>
  )
}
