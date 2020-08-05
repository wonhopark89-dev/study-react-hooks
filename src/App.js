import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1);
  const decrementitem = () => setItem(item - 1);

  return (
    <div className="App">
      <h1>hello {item}</h1>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementitem}>decrement</button>
    </div>
  );
};

export default App;
