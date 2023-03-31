import React from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
  background-color: orange;
`;

const MyHeading = styled.h1`
  background-color: pink;
`;
const Myspan = styled.span`
  background-color: skyblue;
`;

export default function TestStyled() {
  return (
    <MyDiv>
      <MyHeading>h1태그입니다</MyHeading>
      <Myspan>span태그입니다</Myspan>
    </MyDiv>
  );
}
