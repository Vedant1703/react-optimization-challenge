import React, { useState } from 'react'

function Bulky() {
    const [count, setCount] = useState(0);

  return (
    <>
    
    <div className='text-center p-4 text-2xl font-semibold'>
        Count is {count}
    </div>
    <div className='flex justify-around'>
    <button className='bg-pink-50 text-xl px-4 py-2 border-2 border-pink-500' onClick={() => setCount(count+1)}>Increase count by 1</button>
    <button className='bg-green-50 text-xl px-4 py-2 border-2 border-green-500' onClick={() => setCount(count-1)}>Decrease count by 1</button>
    </div>
    
    </>
  )
}

export default Bulky