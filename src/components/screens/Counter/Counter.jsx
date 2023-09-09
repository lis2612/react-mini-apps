import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div
        className="button"
        onClick={() => setCounter(counter + 1)}>
        Counter +1
      </div>
      <h1 style={{ textAlign: "center" }}>{counter}</h1>
      <div
        className="button"
        onClick={() => setCounter(counter - 1)}>
        Counter -1
      </div>
    </div>
  );
};

export default Counter;
