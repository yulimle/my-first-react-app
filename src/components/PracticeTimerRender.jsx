import React, { useState } from 'react';
import PracticeTimer from './PracticeTimer';

export default function PracticeTimerRender() {
  const [show, setShow] = useState(false);
  const [button, setButton] = useState('보이기');

  const setChange = () => {
    button === '보이기' ? setButton('숨기기') : setButton('보이기');
    setShow((cur) => !cur);
  };
  return (
    <>
      {show && <PracticeTimer />}
      <button onClick={setChange}>{button}</button>
    </>
  );
}
