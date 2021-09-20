import React, { useState, useEffect } from "react";
import Hangman from "./components/Hangman";
import Wrong from "./components/Wrong";
import Word from "./components/Word";

const words = [
  "apple",
  "elephant",
  "argentina",
  "russia",
  "mexico",
  "watermelon",
];

let randomWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (randomWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            // show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            // show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  return (
    <div className="game-container">
      <Hangman wrongLetters={wrongLetters} />
      <Wrong wrongLetters={wrongLetters} />
      <Word randomWord={randomWord} correctLetters={correctLetters} />
    </div>
  );
}

export default App;
