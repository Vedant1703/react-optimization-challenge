import { useState, useEffect } from 'react';
import './App.css'
import Time from './components/clock/Time'

function App() {
  const [mouseMoveTrigger, setMouseMoveTrigger] = useState(0);

  useEffect(() => {
    const handleMouseMove = () => {
      setMouseMoveTrigger((prev) => prev + 1); // forces rerender
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const [scrollTrigger, setScrollTrigger] = useState(0); 

  useEffect(() => {
    const handleScroll = () => {
      setScrollTrigger((prev) => prev + 1); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
     <div className='p-6 bg-gray-800'>
     <Time/>
     </div>
    </>
  )
}

export default App
