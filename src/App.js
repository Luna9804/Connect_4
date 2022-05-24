import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [playerTurn, changePlayerTurn] = useState("red");
  const [tokens, changeTokens] = useState([]);

  function togglePlayerTurn() {
    if (playerTurn === "red") {
      changePlayerTurn("yellow");
    } else {
      changePlayerTurn("red");
    }
  }

  function addToken() {}

  return (
    <div className="App">
      <h1>Hello My React App</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="Column" onClick={addToken}>
        <div className=" BlueBox" onClick={() => togglePlayerTurn()}>
          <div className={`${playerTurn} Circle`}></div>
        </div>{" "}
        <div className=" BlueBox" onClick={() => togglePlayerTurn()}>
          <div className={`${playerTurn} Circle`}></div>
        </div>
        <div className=" BlueBox" onClick={() => togglePlayerTurn()}>
          <div className={`${playerTurn} Circle`}></div>
        </div>
      </div>
      <p>the color is {playerTurn}</p>
    </div>
  );
}
