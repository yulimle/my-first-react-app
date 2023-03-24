import { Component } from "react";
import jang from "../img/jang.jpg";
class ImgComponent extends Component {
  constructor() {
    super();
    this.jang = "../img/jang.jpg";
  }
  render() {
    return <img src={jang} className="jang" alt="logo" />;
  }
}
export default ImgComponent;
// import jang from "../img/jang.jpg";
// function ImgComponent() {
//   return <img src={jang} className="jang" alt="logo" />;
// }
// export default ImgComponent;
