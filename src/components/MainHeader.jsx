// 클래스형 컴포넌트
import { Component } from "react";
class MainHeader extends Component {
  constructor() {
    super();
    this.cas = true;
  }
  render() {
    return <h1>Hello,{this.cas ? "캬햐" : "노맛"} World!</h1>;
  }
}
export default MainHeader;
// 함수형 컴포넌트
// function MainHeader() {
//   const cas = true;

//   return <h1>Hello, {cas ? "카햐" : "노맛ㄴ"} Component world!</h1>;
// }
// export default MainHeader;
