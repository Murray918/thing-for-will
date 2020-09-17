import { useState } from "react";

export default function useToggle(initialVal = false) {
  // call useState, "reserve piece of state"
  const [myState, setMyState] = useState(initialVal);
  const toggle = () => {
    setMyState(!myState);
  };
  // return piece of state and a function to toggle it
  return [myState, toggle];
}
