import React, { useState } from 'react';
import ConditionalRender from './ConditionalRender';

export default function ConditionalState() {
  const [condition, setCondition] = useState('보이기');
  const onChange = () => {
    condition === '보이기' ? setCondition('감추기') : setCondition('보이기');
  };
  const conditionalRender = condition === '감추기' && <ConditionalRender />;
  return (
    <>
      {conditionalRender}
      <button onClick={onChange}>{condition}</button>
    </>
  );
}
