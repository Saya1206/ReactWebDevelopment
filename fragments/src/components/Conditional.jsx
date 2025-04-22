import React from "react";

export default function Conditional() {
  let items = [];

  // if (items.length == 0) {
  //   return <h3>I'm still hungary</h3>;
  // }

  return (
    <div>
      {/* {items.length == 0 ? <h3>I'm still hungary</h3> : NULL} */}
      {items.length == 0 && <h3>I'm still hungary</h3>}
    </div>
  );
}
