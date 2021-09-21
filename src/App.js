import React, { useState, useEffect } from "react";
import Hangman from "./components/Hangman";
import Wrong from "./components/Wrong";
import Word from "./components/Word";
import Notification from "./components/Notification";
import Popup from "./components/Popup";

const words = [
  "apple",
  "elephant",
  "argentina",
  "russia",
  "mexico",
  "watermelon",
];

let randomWord = words[Math.floor(Math.random() * words.length)];

const showNotification = (setter) => {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
};

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (randomWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            showNotification(setNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            showNotification(setNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    randomWord = words[random];
  }

  return (
    <>
      <div className="game-container">
        <Hangman wrongLetters={wrongLetters} />
        <Wrong wrongLetters={wrongLetters} />
        <Word randomWord={randomWord} correctLetters={correctLetters} />
      </div>
      <Notification showNotification={notification} />
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={randomWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
    </>
  );
}

export default App;
