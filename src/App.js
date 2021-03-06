import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

export const Api = "http://localhost:8000/api";

function App() {
  const handle = () => {
    return fetch(`${Api}/schools`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((response) => {
        return console.log(response.json());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <button onClick={handle}>sss</button>
    </div>
  );
}

export default App;
