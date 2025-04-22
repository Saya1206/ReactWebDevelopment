import React from "react";
import "./App.css";
import MapMethod from "./components/MapMethod";
import Conditional from "./components/Conditional";
import FoodList from "./components/FoodList";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import Child from "./components/Child";

/*
//You’re returning two sibling elements (<h1> and <div>). React components must return a single parent element — that's why a wrapper is needed.
function App() {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <div>Good morning</div>
    </React.Fragment>
  );
}
  */

/*
function App() {
  return (
    <>
      <h1>Hello</h1>
      <div>Good morning</div>
    </>
  );
}
  */

// function App() {
//   return (
//     <Container>
//       <h1 className="food-heading">Healthy Foods</h1>
//       <FoodInput />
//       <MapMethod />
//       {/* <Conditional /> */}
//     </Container>
//   );
// }

// export default App;

/*
//pass an array as props from a parent component to a child component.

function App() {
  let foodItems = ["Dal", "Roti", "Vegetables", "Ghee", "Milk"];

  return (
    <>
      <FoodList items={foodItems} />
    </>
  );
}

export default App;
*/

function App() {
  const handleGreet = (name) => {
    console.log(`Hello, ${name}`);
  };

  return (
    <>
      <h2>Parent Component</h2>
      <Child greet={handleGreet} />
    </>
  );
}

export default App;
