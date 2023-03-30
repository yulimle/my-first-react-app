import React, { useEffect, useRef, useState } from 'react';

export default function PracticeTimer() {
  const [render, setRender] = useState(true);
  const time = useRef(0);
  useEffect(() => {
    const timer = setInterval(() => {
      time.current += 1;
      console.log(time.current);
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log('타이머 종료');
    };
  }, []);
  return (
    <>
      <h1>{time.current}</h1>
      <button onClick={() => setRender((cur) => !cur)}>시간</button>
    </>
  );
}
