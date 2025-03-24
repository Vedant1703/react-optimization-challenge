import React, { useEffect, useState } from 'react'

function Essay1 () {
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
        const interval = setInterval(fetchFact, 5000); 
    
        return () => clearInterval(interval); 
      }, []);
  return (
    <div>
        <div className='text-xl font-semibold'>What is Docker?</div>
        <div>Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker's methodologies for shipping, testing, and deploying code, you can significantly reduce the delay between writing code and running it in production.</div>
        <div></div>
        
        
    </div>
  )
}

export default Essay1
