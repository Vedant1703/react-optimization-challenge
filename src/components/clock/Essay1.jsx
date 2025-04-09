import React, { useEffect, useState } from 'react'

function Essay1 () {
     console.log("Essay");
  return (
    <div className="p-6 min-w-[50%] bg-gray-200 rounded-xl shadow-lg w-[100%] space-y-4">
    <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">💡 Developer Git Jokes</h2>
    {[
      {
        q: "Why did the developer get lost in the Git forest?",
        a: "They couldn't find the right branch!",
      },
      {
        q: "Why couldn't the developer find their way around the Git repository?",
        a: "They forgot to fetch the remote!",
      },
      {
        q: "Why do developers make terrible comedians?",
        a: 'Their jokes always need a "git pull" before they\'re funny!',
      },
      
      
      {
        q: "Why did the developer always carry a notebook with them?",
        a: 'In case they needed to "git stash" some ideas!',
      },
      {
        q: "Why did the developer refuse get a girlfriend?",
        a: "He just couldn't commit to anyone else!",
      },
      
      {
        q: "What did the developer say when they accidentally deleted their entire project?",
        a: '"Time to git clone and start over!"',
      },
      
      {
        q: "Why did the developer get a job at a bakery?",
        a: 'They were an expert at "git cherry-pick"!',
      },
    ].map((joke, index) => (
      <div
        key={index}
        className="bg-blue-600 text-white p-4 rounded-lg shadow flex gap-4 items-start border-l-4 border-purple-600"
      >
        <div className="text-2xl">😂</div>
        <div>
          <p className="font-semibold">{joke.q}</p>
          <p className=" mt-1">{joke.a}</p>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Essay1
