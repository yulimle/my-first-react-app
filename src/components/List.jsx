import React from "react";
import ListChild from "./ListChild";
import Modal from "./Modal";

export default function List() {
  const dataArr = [
    {
      title: "리액트 공부하기",
      todo: "State 사용법 익히기",
    },
    {
      title: "코테 문제 풀기",
      todo: "Lv 0 정복 가즈아",
    },
    {
      title: "한강 가기",
      todo: "경품 타기",
    },
  ];
  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <Modal />
      {dataArr.map((el, index) => (
        <ListChild title={el.title} todo={el.todo} key={index} />
      ))}
      {dataArr.map((el, index) => {
        return (
          <div key={index}>
            <hr />
            <h2>{el.title}</h2>
            <p>{el.todo}</p>
          </div>
        );
      })}
      <div className="modal" style={{ backgroundColor: "grey" }}>
        <h2>오늘 해야할 일 2개</h2>
        <h2>오늘 완료한 일 2개</h2>
      </div>
    </div>
  );
}
