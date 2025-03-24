import React, { useState } from 'react'

function Bulky() {
    const [count, setCount] = useState(0);

  return (
    <>
    
    <div>
        Count is {count}
    </div>
    <button onClick={() => setCount(count+1)}>Increase count by 1</button>
    <button onClick={() => setCount(count-1)}>Decrease count by 1</button>
    </>
  )
}

export default Bulky