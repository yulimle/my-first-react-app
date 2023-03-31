import React from 'react';
import logo from '../logo.svg';
import styled, { keyframes } from 'styled-components';
export default function StyledComponents() {
  const RootDiv = styled.div`
    text-align: center;
  `;
  const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;
  const rotate = keyframes`from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);}`;

  const AppLogo = styled.img`
    animation: ${rotate} infinite 20s linear;
  `;
  const MyA = styled.a`
    color: #61dafb;
  `;
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}
