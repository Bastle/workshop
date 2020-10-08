import React, { useState } from 'react';
import { connect } from 'react-redux';

const AddNum = (props) => {
  const [count, setCount] = useState(0);
  console.log(props)
  function add1(){
    setCount((count) => count + 1);
  }
  return (
    <div>
      <div>{count}</div>
      <p>search：{props.match.params.id}</p>
      <p>search：{props.name || 'jack'}</p>
      <button onClick={add1}>add1</button>
    </div>
  )
}

const ConnectedAddNum = connect(
  state => ({name: state.user.name})
)(AddNum);
export default ConnectedAddNum;