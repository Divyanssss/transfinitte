import React from 'react';

const First = () => {
  return (
    <div className="px-4 sm:px-7 py-30">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">

  
        <div className="flex flex-col lg:flex-1 items-center lg:items-start text-center lg:text-left">
          <h1 className="font-extrabold text-white tracking-widest font-anurati" style={{ fontSize: '6rem' }}>
            TRANSFINITTE
          </h1>

          <p className="text-gray-300 mt-6 lg:mt-8 max-w-md lg:max-w-2xl font-b" style={{ fontSize: '1.1rem' }}>
            Welcome to TransfiNITTe'25, NIT Trichy's premier hackathon, hosted by the Technical Council and SCIENT. This is where innovation meets action.
          </p>

          <p className="text-gray-300 mt-2 lg:mt-2 max-w-md lg:max-w-2xl font-b" style={{ fontSize: '1.1rem' }}>
            Building on the success of TransfiNITTe'23, where 300+ participants pushed the limits in a 42-hour coding marathon, we're taking it up a notch. With 500+ participants and 100+ teams expected, TransfiNITTe'24 is set to redefine the hackathon experience.
          </p>
          <p className="text-gray-300 mt-2 lg:mt-2 max-w-md lg:max-w-2xl font-b" style={{ fontSize: '1.1rem' }}>
           This isn't just a competition—it's a platform to create real solutions and make an impact. Join us, and be a part of something that truly matters.
          </p>
        </div>

      
        <div className="relative lg:flex-shrink-0">
        
          <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 bg-white rounded-full shadow-[0_0_120px_40px_rgba(255,255,255,0.9)]" />

          <div className="absolute -bottom-10 sm:-bottom-24 lg:-bottom-28 left-1/2 transform -translate-x-1/2 w-12 h-22 sm:w-10 sm:h-25 lg:w-15 lg:h-28 bg-gray-700 rounded-b-md" />
        </div>

      </div>
    </div>
  );
};

export default First;
