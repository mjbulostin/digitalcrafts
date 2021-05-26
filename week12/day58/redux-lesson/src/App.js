import './App.css';
import Counter from './components/Counter';
import React, { useState } from "react";
import ComponentTwo from './components/ComponentTwo';

function App() {
  const [counter, setCounter] = useState(0);
  const [userName, setUserName] = useState("Joe");
  return (
    <div className="App">
      <Counter counter={counter} setCounter={setCounter} />
      <ComponentTwo counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
