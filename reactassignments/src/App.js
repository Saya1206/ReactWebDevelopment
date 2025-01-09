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
