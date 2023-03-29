import React, { useRef } from 'react';

export default function ChangeFocus() {
  const input1 = useRef('test');
  const input2 = useRef();
  const changeFocus1 = () => {
    input1.current.focus();
  };
  const changeFocus2 = () => {
    input2.current.focus();
  };
  return (
    <div>
      <input ref={input1} />
      <input ref={input2} />
      <h1>{input1.current}</h1>
      <br /> <br />
      <button onClick={changeFocus1}>1번 인풋으로 포커스 보내기</button>
      <button onClick={changeFocus2}>2번 인풋으로 포커스 보내기</button>
    </div>
  );
}
