import React, { useEffect, useState } from 'react'
import Bulky from './Bulky';
import Essay1 from './Essay1';

function RandomInfo() {
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
    
  return (
    <>
    <div>
        About cats: {fact}

    </div>
    <Bulky/>
    <Essay1/>
    </>
    
  )
}

export default RandomInfo