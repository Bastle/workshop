import React, { useState, useCallback, FC } from "react";

const Example: FC = () => {
    const [num, setNum] = useState(0);
    const callbackNum = useCallback(() => {}, [num]);
    return (
        <div>
            {num}
            <button
                onClick={() => {
                    setNum(num + 1);
                }}
            >
                add
            </button>
            <button
                onClick={() => {
                    console.log(callbackNum);
                }}
            >
                add
            </button>
        </div>
    );
};
console.log(1);
export default Example;
