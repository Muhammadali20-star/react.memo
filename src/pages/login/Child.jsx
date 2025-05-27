import React, { useState } from "react";

const Child = ({ reset }) => {
  const [count, setRaqam] = useState(0);

  console.log("Child render");

  return (
    <div>
      <h2>Child</h2>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default React.memo(Child);

// memo - HOF
