"use client";

import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<number | undefined>();
  const [state, setState] = useState<boolean>(false);
  const [value, setVal] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setData(5);
    }, 1200);
  }, []);

  let handleClick = () => {
    setState((s) => !s);
  };

  return (
    <div>
      {data && <span>Data</span>}
      {state && <span data-testid={"state-span"}>Active</span>}
      <button onClick={handleClick} data-testid={"state-btn"}>
        Toggle state
      </button>
      <h1 data-testid={"val-h1"}>{value}</h1>
      <input
        type="text"
        data-testid={"val-input"}
        value={value}
        onChange={(e) => setVal(e.target.value)}
      />
    </div>
  );
}

export default App;
