import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0)
  function increment() {
    setCount(count + 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Count;
