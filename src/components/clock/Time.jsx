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
    <div className="text-xl font-semibold p-4 rounded-md">
      Current Time: {time}
      
    </div>
    <RandomInfo/>
    </>
    
  )
}

export default Time