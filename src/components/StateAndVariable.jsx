import React, { useState } from "react";

export default function StateAndVariable() {
  const [state, setState] = useState(0);
  let variable = 0;
  function plusVariable() {
    variable += 1;
    console.log(`state:${state}, variable: ${variable}`);
  }
  return (
    <div>
      <h1>
        {state} / {variable}
      </h1>
      <button
        onClick={() => {
          setState((cur) => cur + 1);
          plusVariable();
        }}
      >
        +1
      </button>
    </div>
  );
}
