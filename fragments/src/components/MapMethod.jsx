import React from "react";
import styles from "./Map.module.css";

export default function MapMethod() {
  // Map method
  let foodItems = ["Dal", "Roti", "Green Vegetables", "Ghee", "Milk"];

  return (
    <>
      <ul className="list-group">
        {foodItems.map((items) => (
          <li key={items} className={`list-group-item ${styles.first}`}>
            {items}
            <button
              className={`btn btn-info ${styles.btn}`}
              onClick={() => console.log(`${items} being bought`)}
            >
              Buy
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
