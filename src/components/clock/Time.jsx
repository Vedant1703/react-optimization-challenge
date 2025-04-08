import React, { useEffect, useState } from 'react'
import RandomInfo from './RandomInfo';

function Time() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
    <div className='bg-gradient-to-r border-2 border-white from-violet-500 to-blue-500 text-white text-xl font-semibold p-6 rounded-lg shadow-md text-center tracking-wide mb-5'>Best of luck minimizing unnecessary rerenders</div>
    <div className="bg-gradient-to-r border-2 border-white from-blue-500 to-indigo-500 text-white text-xl font-semibold p-6 rounded-lg shadow-md text-center tracking-wide">
  🕒 Current Time: <span className="font-mono">{time}</span>
</div>
    <RandomInfo/>
    </>
    
  )
}

export default Time