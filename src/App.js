import logo from "./logo.svg"; // src 폴더 내부에 있는 이미지만 가져올 수 있음
import "./App.css";
import MainHeader from "./components/MainHeader";
import ImgComponent from "./components/ImgComponent";
import BtnToNaver from "./components/BtnToNaver";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import Inline from "./components/Inline";
import EventHandler from "./components/EventHandler";
import ExJsx from "./components/ExJsx";
import State from "./components/State";
import State2 from "./components/State2";
import ExCount from "./components/ExCount";
import Condition from "./components/Condition";
import ClassState from "./components/ClassState";
import StateAndVariable from "./components/StateAndVariable";
function App() {
  return (
    <div className="App">
      <StateAndVariable />
      {/* <ClassState />
      <Condition /> */}
      {/* <ExCount /> */}
      {/* <ExJsx /> */}
      {/* <State2 /> */}
      {/* <Inline />
      <EventHandler /> */}
      {/* <MainHeader />
      <ImgComponent />
      <br />
      <BtnToNaver />
      
      <FunctionalComponent /> */}
      {/* <ClassComponent /> */}
    </div>
  );
}

export default App;

// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> !!and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
