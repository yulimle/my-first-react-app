import React, { useRef } from 'react';

export default function ExInputBackground() {
  const inputEl = useRef();
  const backEl = useRef();
  const changeColor = () => {
    const color = inputEl.current.value;
    backEl.current.style.backgroundColor = `${color}`;
  };
  return (
    <div ref={backEl}>
      <input ref={inputEl} type="text" />
      <br />
      <button onClick={changeColor}>색 적용</button>
    </div>
  );
}
