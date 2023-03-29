import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function RandomQuiz() {
  const [again, setAgain] = useState(true);
  const answerInput = useRef();

  const firstRandomNumber = Math.floor(Math.random() * 10);
  const secondRandomNumber = Math.floor(Math.random() * 10);
  const arithmeticArr = ['+', '-', 'x'];
  const randomArithmetic = Math.floor(Math.random() * arithmeticArr.length);
  const oprator = arithmeticArr[randomArithmetic];

  const clearInput = () => {
    answerInput.current.value = '';
    answerInput.current.focus();
  };

  const checkAnswer = () => {
    let answer = 0;
    if (randomArithmetic === 0) {
      answer = firstRandomNumber + secondRandomNumber;
    } else if (randomArithmetic === 1) {
      answer = firstRandomNumber - secondRandomNumber;
    } else {
      answer = firstRandomNumber * secondRandomNumber;
    }

    if (answer === Number(answerInput.current.value)) {
      alert('정답입니다!');
      setAgain(!again);
      clearInput();
    } else {
      alert('틀렸습니다!');
      clearInput();
    }
  };

  return (
    <div>
      <h1>
        {firstRandomNumber} {oprator} {secondRandomNumber}
      </h1>
      <input type="text" ref={answerInput} />
      <button onClick={checkAnswer}>정답 제출</button>
    </div>
  );
}
