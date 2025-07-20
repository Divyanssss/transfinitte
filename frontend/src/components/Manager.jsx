import React from 'react';
import First from './pages/first';
import Second from './pages/Second';
import Third from './pages/Third';
import Fourth from './pages/Fourth';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';

const Manager = () => {
  return (
    <div className="relative">
      {/* Fixed background elements */}
      <div className="fixed inset-0 bg-black z-0"></div>
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none z-0"></div>
      <div className="fixed left-1/2 top-[5%] -translate-x-1/2 h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] pointer-events-none z-0"></div>
      
      
      <div className="relative z-10" style={{ height: '90vh' }}>
        <Parallax pages={5} style={{ top: '0', left: '0' }}>
          <ParallaxLayer offset={0} speed={0.2}>
          
              <First />
            
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            
              <Second />
          
          </ParallaxLayer>
           <ParallaxLayer offset={2} speed={0.3}>
            
              <Third />
          
          </ParallaxLayer>
           <ParallaxLayer offset={3} speed={0.7}>
            
              <Fourth />
          
          </ParallaxLayer>
          
        </Parallax>
      </div>
      
      
    </div>
  );
};

export default Manager;