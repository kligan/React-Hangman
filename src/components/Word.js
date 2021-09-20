import React from "react";

export default function Word({ randomWord, correctLetters }) {
  return (
    <div className="word">
      {randomWord.split("").map((element, index) => {
        return (
          <span className="letter" key={index}>
            {correctLetters.includes(element) ? element : ""}
          </span>
        );
      })}
    </div>
  );
}
