import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer.jsx";
import Display from "./components/Display";

function App() {
  const [calVal, SetCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      SetCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      SetCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      SetCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <ButtonContainer onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;
