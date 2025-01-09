function SquareBox({ height, width }) {

  const size = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor: "lightblue",
    border: "2px solid black",
  };

  return <div style={size}></div>;
}

export default SquareBox;
