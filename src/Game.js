import React, { useState } from "react";
import "./Game.css";

const Game = () => {
  const [guess, setGuess] = useState("");
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [result, setResult] = useState("");
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 3;

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const handleGuess = () => {
    const userGuess = parseInt(guess);

    if (userGuess === randomNumber) {
      setResult("YOU WON");
    } else {
      setAttempts(attempts + 1);

      if (attempts < maxAttempts - 1) {
        setResult(`TRY AGAIN. ${maxAttempts - attempts - 1} attempts left.`);
      } else {
        setResult(`SORRY, YOU FAILED. THE CORRECT NUMBER WAS ${randomNumber}.`);
      }
    }

    // Clear the input field
    setGuess("");
  };

  const handleReset = () => {
    setGuess("");
    setAttempts(0);
    setResult("");

    // Generate a new random number
    const newRandomNumber = generateRandomNumber();
    // Update the state with the new random number
    setRandomNumber(newRandomNumber);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleGuess();
    }
  };

  return (
    <div className="game-container">
      <h1>NUMBER GUESSING GAME</h1>
      <p>GUESS A NUMBER BETWEEN 1 AND 10:</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleGuess} disabled={attempts === maxAttempts}>
        Submit Guess
      </button>
      <button onClick={handleReset}>Reset Game</button>
      <p className={result.includes("SORRY") ? "failure" : ""}>{result}</p>
    </div>
  );
};

export default Game;

//  import React, { useState } from 'react';
//  import './Game.css'
//  import React, { useState } from "react";
//  import "./Game.css"; // Import your CSS file

//  const Game = () => {
//    const [guess, setGuess] = useState("");
//    const [randomNumber] = useState(Math.floor(Math.random() * 10) + 1);
//    const [result, setResult] = useState("");
//    const [attempts, setAttempts] = useState(0);
//    const maxAttempts = 5;

//    const handleGuess = () => {
//      const userGuess = parseInt(guess);

//      if (userGuess === randomNumber) {
//        setResult("YOU WON");
//      } else {
//        setAttempts(attempts + 1);

//        if (attempts < maxAttempts - 1) {
//          setResult(`TRY AGAIN. ${maxAttempts - attempts - 1} attempts left.`);
//        } else {
//          setResult(
//            `SORRY, YOU FAILED. THE CORRECT NUMBER WAS ${randomNumber}.`
//          );
//        }
//      }

//      // Clear the input field
//      setGuess("");
//    };

//    const handleReset = () => {
//      setGuess("");
//      setAttempts(0);
//      setResult("");
//    };

//    const handleKeyPress = (e) => {
//      if (e.key === "Enter") {
//        handleGuess();
//      }
//    };

//    return (
//      <div className="game-container">
//        <h1>NUMBER GUESSING GAME</h1>
//        <p>GUESS A NUMBER BETWEEN 1 AND 10:</p>
//        <input
//          type="number"
//          value={guess}
//          onChange={(e) => setGuess(e.target.value)}
//          onKeyPress={handleKeyPress}
//        />
//        <button onClick={handleGuess} disabled={attempts === maxAttempts}>
//          Submit Guess
//        </button>
//        <button onClick={handleReset}>Reset Game</button>
//        <p className={result.includes("SORRY") ? "failure" : ""}>{result}</p>
//      </div>
//    );
//  };

//  export default Game;

// const Game = () => {
//   const [guess, setGuess] = useState('');
//   const [randomNumber] = useState(Math.floor(Math.random() * 10) + 1);
//   const [result, setResult] = useState('');
//   const [attempts, setAttempts] = useState(0);
//   const maxAttempts = 3;

//   const handleGuess = () => {
//     const userGuess = parseInt(guess);

//     if (userGuess === randomNumber) {
//       setResult('YOU WON');
//     } else {
//       setAttempts(attempts + 1);

//       if (attempts < maxAttempts - 1) {
//         setResult(`TRY AGAIN. ${maxAttempts - attempts - 1} attempts left.`);
//       } else {
//         setResult(`SORRY, YOU FAILED. THE CORRECT NUMBER WAS ${randomNumber}.`);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>NUMBER GUESSING GAME</h1>
//       <p>GUESS A NUMBER BETWEEN 1 AND 10:</p>
//       <input
//         type="number"
//         value={guess}
//         onChange={(e) => setGuess(e.target.value)}
//       />
//       <button onClick={handleGuess} disabled={attempts === maxAttempts}>
//         Submit Guess
//       </button>
//       <p className={result.includes('SORRY') ? 'failure' : ''}>{result}</p>
//     </div>
//   );
// };

// export default Game;
