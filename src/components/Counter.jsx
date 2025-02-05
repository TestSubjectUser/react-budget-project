// src/components/Counter.js
import React, { useState } from "react";

const Counter = React.memo(({ count }) => {
  console.log("Counter rendered");
  return <h2>Count: {count}</h2>;
});

export default Counter;

// import React, { useState } from "react";
// import Button from "./Button";

// function Counter() {
//   const [counter, setCounter] = useState(0);

//   return (
//     <>
//       <h1>Counter: </h1>
//       <h3>{counter}</h3>
//       <Button
//         onClick={() => {
//           setCounter((prevCounter) => prevCounter + 1);
//         }}
//       >
//         Counter ++
//       </Button>
//     </>
//   );
// }

// export default Counter;
