import React, { useState, useMemo, useEffect, useCallback } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [testObj, setTestObj] = useState({ a: 1, b: "b" });

  const myCount = count * 2;
  useEffect(() => {
    console.log(11111111111);
  }, [testObj]);

  const handleClick = () => {
    alert(count);
  };

  useEffect(() => {
    window.addEventListener("dblclick", handleClick);
    return () => {
      window.removeEventListener("dblclick", handleClick);
    };
  }, [count]);

  return (
    <div>
      <ShowCount myCount={myCount} />
      <button
        key="1"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </button>
      <button
        key="2"
        onClick={() => {
          setTestObj({ a: 1, b: "b" });
        }}
      >
        change
      </button>
      <button key="3" onClick={handleClick}>
        alert count
      </button>
    </div>
  );
};

const ShowCount = ({ myCount }) => {
  return <p>{myCount}</p>;
};

export default Hooks;
