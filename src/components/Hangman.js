import React from "react";

export default function hangman({ wrongLetters }) {
  const errors = wrongLetters.length;
  return (
    <div className="container">
      <svg height="250" width="250" className="hangman">
        <line x1="60" y1="20" x2="140" y2="20"></line>
        <line x1="140" y1="20" x2="140" y2="50"></line>
        <line x1="60" y1="20" x2="60" y2="230"></line>
        <line x1="20" y1="230" x2="100" y2="230"></line>
        {errors > 0 && <circle cx="140" cy="70" r="20" />}
        {errors > 1 && <line x1="140" y1="90" x2="140" y2="150"></line>}
        {errors > 2 && <line x1="140" y1="120" x2="120" y2="100"></line>}
        {errors > 3 && <line x1="140" y1="120" x2="160" y2="100"></line>}
        {errors > 4 && <line x1="140" y1="150" x2="120" y2="180"></line>}
        {errors > 5 && <line x1="140" y1="150" x2="160" y2="180"></line>}
      </svg>
    </div>
  );
}
