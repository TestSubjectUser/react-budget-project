// src/components/CounterApp.js
import React, { useState, useCallback } from "react";
import Counter from "./Counter";

const CounterApp = () => {
  const [count, setCount] = 0;

  const resetCount = useCallback(() => {
    setCount(0);
  }, []);
  // useCallback memoizes the resetCount function. The dependency array is empty ([]).  This means that the resetCount function will never be re-created.  It will always be the same function instance.
  // Without useCallback, a new resetCount function would be created on every render of CounterApp.  Even though the function's logic is the same, it's a different function instance.  This would cause React.memo in the Counter component to think that the props have changed (because the function prop is a new reference), and it would re-render Counter unnecessarily.
  return (
    <div>
      <Counter count={count} />
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default CounterApp;

// // src/components/List.js
// import React, { useMemo } from 'react';

// const List = ({ numbers }) => {
//   const sum = useMemo(() => {
//     console.log('Calculating sum...');
//     return numbers.reduce((acc, num) => acc + num, 0);
//   }, [numbers]);

//   const average = useMemo(() => {
//     console.log('Calculating average...');
//     return sum / numbers.length || 0;
//   }, [sum, numbers.length]);

//   return (
//     <div>
//       <h3>Sum: {sum}</h3>
//       <h3>Average: {average}</h3>
//     </div>
//   );
// };

// export default List;
