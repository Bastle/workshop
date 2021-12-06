import React, { useState, useMemo, useEffect, useCallback, useRef } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [testObj, setTestObj] = useState({ a: 1, b: "b" });

  const myCount = count * 2;
  useEffect(() => {
    console.log(11111111111);
  }, [testObj]);

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
    </div>
  );
};

const ShowCount = ({ myCount }) => {
  const countRef = useRef(myCount);
  return (
    <div>
      <p>{myCount}</p>
      <p>{countRef.current}</p>
    </div>
  );
};

export default Hooks;
