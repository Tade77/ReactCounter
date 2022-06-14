import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClickUp = () => {
    setCount((count) => count + 1);
    // console.log(count);
  };

  const handleClickDown = () => {
    setCount((count) => count - 1);
    // console.log(count);
  };
  return (
    <div className="container">
      <h1>Counter</h1>
      <>
        <button onClick={handleClickUp}>Countup</button>
        <span>{count}</span>
        <button onClick={handleClickDown}>Countdown</button>
      </>
    </div>
  );
};

export default App;
