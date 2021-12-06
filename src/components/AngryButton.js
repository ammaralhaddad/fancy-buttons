import { useState } from "react";

function AngryButton(props) {
  const [anger, setAnger] = useState(0);

  const handleClick = () => {
    if (anger < 1) {
      setAnger = anger + 0.1;
    } else {
      setAnger(0);
    }
  };

  return (
    <button
      style={{ backgroundColor: `rgba(255,0,0,${anger})` }}
      className="AngryButton"
    >
      {anger < 1 && <span>Dont't click me to much</span>}
      {anger > 1 && <span>Mero!</span>}
    </button>
  );
}

export default AngryButton;
