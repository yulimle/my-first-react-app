function ExJsx() {
  const helloStr = "Hello,first exercise";
  function divClick() {
    alert("클릭 됨");
  }
  return (
    <div
      style={{ marginTop: "32px", backgroundColor: "skyblue" }}
      onClick={divClick}
    >
      {helloStr}
    </div>
  );
}
export default ExJsx;
