import React, { useState} from "react";
import Counter from "./Counter";
function App() {
  const [theTrueCount, ] = useState(0);

  return (
    <div className="App">
      <h1>Ths is our count</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
      {/* <button onClick={() => setCount(count + 1)}>Add</button> */}
    </div>
  );
}

export default App;
