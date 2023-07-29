import { useState } from "react";

export const useCount = (initial) => {
  const [count, setCount] = useState(initial);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count <= 0) return 0;
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };

  return [count, increment, decrement, resetCount];
};
