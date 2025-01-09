/*
import "./App.css";
import Greeting from "./components/Greeting.js";

function App() {
  return (
    <div>
      <Greeting name="John!" />
    </div>
  );
}

export default App;
*/

/*
import ProfileCard from "./components/ProfileCard";

function App() {
  let name = "pratiksha";
  let age = 24;
  let location = "latur";

  let styleobj = {
    height: "200px",
    width: "200px",
    backgroundColor: "bisque",
    padding: "10px",
    margin: "auto",
  };

  return (
    <div style={styleobj}>
      <ProfileCard name={name} age={age} location={location} />
    </div>
  );
}

export default App;
*/

/*
import FavoriteFood from "./components/FavoriteFood.js";

function App() {
  return (
    <div
      style={{ backgroundColor: "aquamarine", color: "brown", padding: "6px" }}
    >
      <FavoriteFood food="Apple" />
    </div>
  );
}

export default App;
*/

/*
import ColorBox from "./components/ColorBox";

function App() {
  return (
    <div>
      <ColorBox color="pink" />
      <ColorBox color="yellow" />
    </div>
  );
}

export default App;
*/

/*
import Message from "./components/Message";

function App() {
  return (
    <div>
      <Message text="Hello, React Component" />
    </div>
  );
}

export default App;
*/

import Item from "./components/Item";

function App() {

  let styleObj = {
    height: "100px",
    width: "200px",
    border: "2px solid grey",
    borderRadius: "6px",
    fontFamily: "monospace",
    backgroundColor: "cornsilk",
    margin: "auto",
  };
  
  return (
    <div style={styleObj}>
      <Item name="iPad" price="50" />
      <Item name="Apple" price="1.25" />
    </div>
  );
}

export default App;
