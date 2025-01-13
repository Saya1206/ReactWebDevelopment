import React from "react";

//Logical Operator &&
/* This operator is used for checking the condition.
If the condition is true, it will return the element right after &&,
and if it is false, React will ignore and skip it.
*/

export default function LogicalOperator() {
  return (
    <>
      {20 > 2 && <p>The condition is true, so this paragraph is rendered!</p>}
    </>
  );
}
