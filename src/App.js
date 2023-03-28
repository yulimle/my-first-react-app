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
import List from "./components/List";
import PropsHeader from "./components/PropsHeader";
import MultiProps from "./components/MultiProps";
import ClassProps from "./components/ClassProps";
import ExMap from "./components/ExMap";
import CustomList from "./components/CustomList";
import CustomObj from "./components/CustomObj";
import ChangeObjList from "./components/ChangeObjList";
import ChangeObj from "./components/ChangeObj";

function App() {
  // const str = "Go Naver";
  // const nameArr = ["뽀로로", "루피", "크롱"];
  // const pororoObj = { name: "뽀로로", age: "5", nickName: "사고뭉치" };
  return (
    <div className="App">
      <ChangeObj />
      {/* <CustomList arr={nameArr} />
      <CustomObj obj={pororoObj} /> */}
      {/* <ExMap /> */}
      {/* <List /> */}
      {/* <ClassProps name="뽀로로" age="5" nickName="사고뭉치" /> */}
      {/* <PropsHeader text="hello, props world" />
      <PropsHeader text="hi" />
      <PropsHeader text="hohohoho" />
      <MultiProps text={str} href="http://naver.com" userID="tetz" /> */}

      {/* <List /> */}
      {/* <ImgComponent /> */}
      {/* <StateAndVariable /> */}
      {/* <ClassState />
      <Condition /> */}
      {/* <ExCount /> */}
      {/* <ExJsx /> */}
      {/* <State2 /> */}
      {/* <Inline />
      <EventHandler /> */}
      {/* <MainHeader />
       
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
