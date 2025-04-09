import React, {useState, useEffect} from 'react'

const Info = () => {
    const [fact, setFact] = useState("");
    
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

      console.log("New Random Info");
    
  return (
    <div>
        {/* <div className="w-50% my-5 mx-5 min-h-[220px] bg-gradient-to-br from-purple-600 to-indigo-600 border-2 border-white rounded-2xl p-6 text-center shadow-lg transition-all duration-300 hover:scale-[1.01]"> */}
      <div className="min-w-[50%] my-5 mx-5 min-h-[220px] bg-gradient-to-br from-purple-600 to-indigo-600 border-2 border-white rounded-2xl p-6 text-center shadow-lg transition-all duration-300 hover:scale-[1.01]">
    <h2 className="text-2xl font-bold mb-4 text-yellow-200">
      🐱 Your 10-Second Random Cat Fact
    </h2>
    <p className="text-lg italic leading-relaxed text-white">
      {fact || "Loading a purr-fect fact..."}
    </p>
  </div>
    </div>
  )
}

export default Info
