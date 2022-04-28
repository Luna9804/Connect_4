import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [playerTurn, changePlayerTurn] = useState("yellow");

  function togglePlayerTurn() {
    if (playerTurn === "yellow") {
      changePlayerTurn("red");
    } else {
      changePlayerTurn("yellow");
    }
  }

  return (
    <div className="App">
      <h1>Hello My React App</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="Bluebox">
        <div className="Circle"></div>
      </div>
      <p>the color is {playerTurn}</p>
    </div>
  );
}
