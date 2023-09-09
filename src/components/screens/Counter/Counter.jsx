import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        className="button"
        onClick={() => setCounter(counter + 1)}>
        Counter +1
      </button>
      <h1 style={{ textAlign: "center" }}>{counter}</h1>
      <button
        className="button"
        onClick={() => setCounter(counter - 1)}>
        Counter -1
      </button>
    </div>
  );
};

export default Counter;
