function Inline() {
  const styleObj = { fontSize: "32px", backgroundColor: "yellow" };
  return (
    <div style={{ fontSize: "32px", backgroundColor: "orange" }}>
      test Text<div style={styleObj}>g</div>
    </div>
  );
}
export default Inline;
