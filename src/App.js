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

const useTabs = (initalTabs, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initalTabs);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};

const App = () => {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1);
  const decrementitem = () => setItem(item - 1);

  const maxLen = (tomato) => tomato.length <= 10; // 검증할 함수
  const name = useInput("Mr.", maxLen);

  const { currentItem, changeItem } = useTabs(0, tabs);

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

      <h1>useTab ?</h1>
      {tabs.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.title}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;

const tabs = [
  {
    title: "section 1",
    content: "this is section 1 content",
  },
  {
    title: "section 2",
    content: "this is section 2 content",
  },
];
