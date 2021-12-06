import { useState } from "react";
function CounterButton(props) {
  const [clickAmount, setClickAmount] = useState(0);

  const handleClick = () => setClickAmount(clickAmount + 1);
  return (
    <button className="CounterButton">You clicked {clickAmount} times</button>
  );
}

export default CounterButton;
