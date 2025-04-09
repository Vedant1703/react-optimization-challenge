import React, { useState, useEffect } from "react";
import Essay1 from "./Essay1";


const choices = [
  { name: "Rock", emoji: "🪨" },
  { name: "Paper", emoji: "📄" },
  { name: "Scissors", emoji: "✂️" },
];

const rules = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};

const getRandomChoice = () => {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

export default function Game() {
    const [prop, setProp] = useState(2);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setProp(prev => prev + 1);
    //     }, 5000);
    
    //     return () => clearInterval(interval); 
    //   }, []);

  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ user: 0, computer: 0 });

  const handleClick = (choice) => {
    const comp = getRandomChoice();
    setUserChoice(choice);
    setComputerChoice(comp);

    if (choice.name === comp.name) {
      setResult("Draw 🤝");
    } else if (rules[choice.name] === comp.name) {
      setResult("You Win! 🎉");
      setScore((s) => ({ ...s, user: s.user + 1 }));
    } else {
      setResult("Computer Wins! 😢");
      setScore((s) => ({ ...s, computer: s.computer + 1 }));
    }
  };
// <div className="mx-10 min-w-[50%] flex flex-row justify-between items-start text-white my-6 gap-4">
  console.log("Game");

  return (
    <>
    <div className="mx-10 min-w-[50%] flex flex-row justify-between items-start text-white my-6 gap-4">
 
    <div className="flex flex-col gap-4">
    
      <div className="flex flex-col w-full justify-center border-white border-2 rounded-lg items-center bg-gradient-to-br from-purple-600 to-blue-600 p-6">
        <h1 className="text-3xl text-yellow-200 font-extrabold mb-4">
          Stone Paper Scissors
        </h1>

        <div className="flex gap-6 my-4">
          {choices.map((choice) => (
            <button
              key={choice.name}
              onClick={() => handleClick(choice)}
              className="bg-white text-3xl p-6 rounded-full shadow-lg hover:scale-110 transition"
            >
              {choice.emoji}
            </button>
          ))}
        </div>

        <div className="text-xl my-4">
          {userChoice && computerChoice && (
            <>
              <p>
                You chose{" "}
                <span className="font-bold">{userChoice.emoji}</span> vs
                Computer chose{" "}
                <span className="font-bold">{computerChoice.emoji}</span>
              </p>
              <p className="mt-2 font-semibold">{result}</p>
            </>
          )}
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg shadow-lg flex gap-12 text-lg font-semibold">
          <span className="text-green-600">You: {score.user}</span>
          <span className="text-red-600">Computer: {score.computer}</span>
        </div>
      </div>
      </div>

 
{/* <div className="w-[48%]">
  <Essay1 />
</div> */}
</div>
</>
  );
}
