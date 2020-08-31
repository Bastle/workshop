import React, { useState, useEffect} from 'react';

const AddNum = (props) => {
  const [count, setCount] = useState(0);

  function add1(){
    setTimeout(() => {
      setCount((count) => count+1);
      console.log(1, count);
      setCount((count) => count + 1);
      console.log(2, count);
    },1)
    
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={add1}>add1</button>
    </div>
  )
}

export default AddNum;