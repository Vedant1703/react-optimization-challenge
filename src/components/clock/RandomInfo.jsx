import React, { useEffect, useState, useRef} from 'react'
import Bulky from './Bulky';
import Game from './Game';
function RandomInfo() {
    const [fact, setFact] = useState("");
    
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef(null);
  
    useEffect(() => {
      if (running) {
        intervalRef.current = setInterval(() => {
          setSeconds((prev) => prev + 1);
        }, 1000);
      } else {
        clearInterval(intervalRef.current);
      }
      return () => clearInterval(intervalRef.current);
    }, [running]);
  
    const formatTime = (secs) => {
      const m = String(Math.floor(secs / 60)).padStart(2, "0");
      const s = String(secs % 60).padStart(2, "0");
      return `${m}:${s}`;
    };
  
    const reset = () => {
      clearInterval(intervalRef.current);
      setRunning(false);
      setSeconds(0);
    };
  useEffect(() => {
    const fetchFact = () => {
      fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then((res) => {
          setFact(res.fact);
        })
        .catch(error => console.error('Error fetching cat fact:', error));
    };

    fetchFact(); 
    const interval = setInterval(fetchFact, 10000); 

    return () => clearInterval(interval); 
  }, []);
    
  return (
    <>
    <div className="flex justify-between items-center text-white my-6">
  <div className="w-[48%] min-h-[220px] bg-gradient-to-br from-purple-600 to-indigo-600 border-2 border-white rounded-2xl p-6 text-center shadow-lg transition-all duration-300 hover:scale-[1.01]">
    <h2 className="text-2xl font-bold mb-4 text-yellow-200">
      🐱 Your 10-Second Random Cat Fact
    </h2>
    <p className="text-lg italic leading-relaxed text-white">
      {fact || "Loading a purr-fect fact..."}
    </p>
  </div>
  <div className="w-[48%] min-h-[220px] bg-gradient-to-br from-purple-600 to-indigo-600 border-2 border-white rounded-2xl p-6 text-center shadow-lg transition-all duration-300 hover:scale-[1.01]">
        <h1 className="text-2xl font-bold mb-4">⏱️ Timer</h1>
        <div className="text-4xl font-mono tracking-widest mb-6">
          {formatTime(seconds)}
        </div>
        <div className="flex justify-center w-[100%] gap-8">
          <button
            onClick={() => setRunning((prev) => !prev)}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              running
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {running ? "Pause" : "Start"}
          </button>
          <button
            onClick={reset}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition"
          >
            Reset
          </button>
        </div>
      </div>
</div>
   
      <Game/>

    
    
    </>
    
  )
}

export default RandomInfo