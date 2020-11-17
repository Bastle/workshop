import React, { useState, useMemo, useEffect } from 'react';

const Hooks = () => {
    const [count, setCount] = useState(0);
    const myCount = count*2;
    console.log('count: ', count);
    console.log('myCount: ', myCount);
    return (
        <div>
            <ShowCount myCount={myCount}/>
            <button onClick={() => {setCount(count+1)}}>add</button>
        </div>
    )
}

const ShowCount = ({myCount}) => {
    return (
        <p>
            { myCount }
        </p>
    )
}

export default Hooks;