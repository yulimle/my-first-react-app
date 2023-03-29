import { useRef, useState } from 'react';

export default function TestRef() {
  const [text, setText] = useState('안녕하세요');
  const inputValue = useRef();

  // 이벤트 객체 사용
  const onChangeText = (e) => {
    const inputText = e.target.value;
    setText(inputText);
  };
  // useRef 사용
  const onChangeRef = () => {
    setText(inputValue.current.value);
  };
  return (
    <div>
      <h1>{text}</h1>
      <input ref={inputValue} onChange={onChangeRef} />
    </div>
  );
}
