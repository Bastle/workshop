import React, { useState } from 'react';
import { connect } from 'react-redux';

const AddNum = props => {
  console.log('addOne props --------> ', props);
  const {name, match, addOne, count, minusOne, logout } = props;
  return (
    <div>
      <div>{count}</div>
      <p>search：{match.params.id}</p>
      <p>search：{name || 'default'}</p>
      <button onClick={addOne}>add1</button>
      <button onClick={minusOne}>minus1</button>
      <button onClick={logout}>退出登录</button>
    </div>
  )
}

export default connect(
  state => ({
    name: state.user.name,
    count: state.count
  }),
  {
    addOne: () => ({
      type: 'ADD'
    }),
    minusOne: () => ({
      type: 'MINUS'
    }),
    logout: () => ({
      type: 'LOGOUT'
    })
  }
)(AddNum);