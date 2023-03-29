import React, { useRef, useState } from 'react';

export default function ExQuiz() {
  const cal = ['+', '-', 'x'];
  const index = Math.floor(Math.random() * 3);
  const [randomNum1, setRandomNum1] = useState(Math.floor(Math.random() * 10));
  const [randomNum2, setRandomNum2] = useState(Math.floor(Math.random() * 10));
  const [answer, setAnswer] = useState(cal[randomNum1 % cal.length]);

  const inputEl = useRef();

  const quizAnswer = () => {
    if (cal[index] === '+') {
      setAnswer(randomNum1 + randomNum2);
    } else if (cal[index] === '-') {
      setAnswer(randomNum1 - randomNum2);
    } else if (cal[index] === '*') {
      setAnswer(randomNum1 * randomNum2);
    }
    console.log(parseInt(inputEl.current.value));
    console.log(answer);
    if (parseInt(inputEl.current.value) === answer) {
      alert('정답입니다!');
    } else {
      alert('틀렸습니다!');
      inputEl.current.value = '';
      inputEl.current.focus();
    }
  };

  return (
    <div>
      <h1>
        {randomNum1}
        {cal[index]}
        {randomNum2}
      </h1>
      <input type="text" ref={inputEl} />
      <button onClick={quizAnswer}>정답 제출!</button>
    </div>
  );
}
