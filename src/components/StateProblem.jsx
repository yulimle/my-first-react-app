import React, { useState } from "react";

export default function StateProblem() {
  // 배열
  // const [state, setState] = useState([0]);
  // 객체
  const [state, setState] = useState({ teacher: "이유림" });
  // 초기값과 바뀐 값이 다를때만 리랜더링 해줌
  // 메모리 주소 값 바꿔줘야함
  console.log(state);
  return (
    <div>
      {state.teacher}
      <br />
      <button
        onClick={() => {
          // state[0] = 1;
          // // 배열을 복사해 새로운 주소값에 할당해 리랜더링 되도록 해줌!
          // const copyArr = [...state];
          // setState(copyArr);
          // console.log(state);
          state.teacher = "YL";
          const copyObj = { ...state };
          setState(copyObj);
          console.log(state);
        }}
      >
        1로 만들기
      </button>
    </div>
  );
}
