import React, { useEffect, useState } from 'react'

function Bulky({increaseFunc, decreaseFunc}) {
    const [count, setCount] = useState(0);
   
  return (
    <>
    
    <div className="max-w-md mx-auto mt-10 p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl shadow-lg text-center">
  <div className="text-3xl font-bold text-gray-800 mb-6">
    Count is {count}
  </div>
  <div className="flex justify-center gap-6">
    <button
      className="bg-pink-500 text-white text-lg px-6 py-3 rounded-full shadow-md hover:bg-pink-600 transition"
      onClick={() => {
        setCount(count + 1)
        increaseFunc();
      }}
    >
      ➕ Increase
    </button>
    <button
      className="bg-green-500 text-white text-lg px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition"
      onClick={() => {
        setCount(count - 1);
        decreaseFunc();
      }}
    >
      ➖ Decrease
    </button>
  </div>
</div>
    </>
  )
}

export default Bulky