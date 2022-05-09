import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [playerTurn, changePlayerTurn] = useState("red");

  function togglePlayerTurn() {
    if (playerTurn === "red") {
      changePlayerTurn("yellow");
    } else {
      changePlayerTurn("red");
    }
  }

  return (
    <div className="App">
      <h1>Hello My React App</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className = "Column">
      <div className = " BlueBox"
          onClick = {() => togglePlayerTurn()}>
        <div className={`${playerTurn} Circle`}></div>
      </div> 
      <div className="Bluebox"></div>
      </div>
      <p>the color is {playerTurn}</p>
    </div>
  );
}
