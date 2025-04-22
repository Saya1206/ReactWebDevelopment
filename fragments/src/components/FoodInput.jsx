import styles from "./FoodInput.module.css";

export default function FoodInput() {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter food item here"
        className={styles.foodInput}
        onChange={handleOnChange}
      />
    </>
  );
}
