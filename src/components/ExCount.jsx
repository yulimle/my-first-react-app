import React, { useState } from "react";

export default function ExCount() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <br />
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
