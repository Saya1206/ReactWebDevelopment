/*
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

function App() {
  return (
    <div>
      <p>This is my first react application</p>

      <FirstComponent />

      <SecondComponent />
    </div>
  );
}

export default App;
*/

/*
import ThirdComponent from "./components/ThirdComponent";

function App() {
  return (
    <div>
      <ThirdComponent name="ajay" age="22" />
    </div>
  );
}

export default App;
*/

/*
import FourthComponent from "./components/FourthComponent";

function App() {
  return (
    <div>
      <FourthComponent name="swara" age="12" />
    </div>
  );
}

export default App;
*/

import FifthComponent from "./components/FifthComponent";

function App() {
  let stu_name = "rahul";
  let stu_marks = 78;

  return (
    <div>
      <FifthComponent name={stu_name} marks={stu_marks} />
    </div>
  );
}

export default App;
