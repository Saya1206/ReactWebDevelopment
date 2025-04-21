import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer.jsx";
import Display from "./components/Display";

function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonContainer />
    </div>
  );
}

export default App;
