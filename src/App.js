import React, { useState } from "react";
import "./App.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value); // 검증할 함수에 대한 결과
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

const App = () => {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1);
  const decrementitem = () => setItem(item - 1);

  const maxLen = (tomato) => tomato.length <= 10; // 검증할 함수
  const name = useInput("Mr.", maxLen);

  return (
    <div className="App">
      <h1>hello {item}</h1>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementitem}>decrement</button>

      <h1>useInput ?</h1>
      <input
        placeholder="Name..."
        // value={name.value}
        // onChange={name.onChange}
        {...name}
      />
    </div>
  );
};

export default App;
