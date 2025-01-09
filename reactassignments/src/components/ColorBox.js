function ColorBox({ color }) {
  const boxStyle = {
    backgroundColor: color,
    height: "100px",
    width: "100px",
    border: "2px solid black",
  };

  return <div style={boxStyle}></div>;
}

export default ColorBox;
