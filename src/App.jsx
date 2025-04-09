import { useState, useEffect } from 'react';
import './App.css'
import Time from './components/clock/Time'
import RandomInfo from './components/clock/RandomInfo'
import Game from './components/clock/Game';
import Essay1 from './components/clock/Essay1';
import Info from './components/clock/Info';

function App() {
  // const [mouseMoveTrigger, setMouseMoveTrigger] = useState(0);

  // useEffect(() => {
  //   const handleMouseMove = () => {
  //     setMouseMoveTrigger((prev) => prev + 1); 
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => window.removeEventListener('mousemove', handleMouseMove);
  // }, []);

  // const [scrollTrigger, setScrollTrigger] = useState(0); 

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollTrigger((prev) => prev + 1); 
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  return (
    <>
     <div className='p-6 bg-gray-800'>
     <Time/>
     <div className='flex justify-between items-center'>
     <Info/>
     <RandomInfo/>
     </div>
     
     <div className='flex justify-between'>
     <Game/>
     <Essay1 />
     </div>
        
     </div>
    </>
  )
}

export default App
