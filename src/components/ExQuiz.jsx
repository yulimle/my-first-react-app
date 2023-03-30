import React, { useRef, useState } from 'react';

export default function ExQuiz() {
  const [again, setAgain] = useState(true);
  const inputEl = useRef();

  const cal = ['+', '-', 'x'];
  const index = Math.floor(Math.random() * cal.length);
  const operator = cal[index];
  const randomNum1 = Math.floor(Math.random() * 10);
  const randomNum2 = Math.floor(Math.random() * 10);
  const clearInput = () => {
    inputEl.current.value = '';
    inputEl.current.focus();
  };

  const quizAnswer = () => {
    let answer = 0;
    if (operator === '+') {
      answer = randomNum1 + randomNum2;
    } else if (operator === '-') {
      answer = randomNum1 - randomNum2;
    } else if (operator === '*') {
      answer = randomNum1 * randomNum2;
    }

    if (answer === parseInt(inputEl.current.value)) {
      alert('정답입니다!');
      setAgain(!again);
      clearInput();
    } else {
      alert('틀렸습니다!');
      inputEl.current.value = '';
      inputEl.current.focus();
      clearInput();
    }
  };

  return (
    <div>
      <h1 style={{ backgroundColor: 'yellow' }}>
        {randomNum1} {operator} {randomNum2}
      </h1>
      <input type="text" ref={inputEl} />
      <button onClick={quizAnswer}>정답 제출!</button>
    </div>
  );
}
