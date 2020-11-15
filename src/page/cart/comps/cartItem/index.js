import React from 'react';
import Checkbox from 'antd/es/checkbox';
import 'antd/es/checkbox/style/index.css';

function areEqual(prevProps, nextProps) {
  return prevProps.checked === nextProps.checked;
}

const CartItem = React.memo(({
  checked,
  itemData,
  onCheckedChange
}) => {
  console.log('render');
  return (
    <div style={{display: 'flex'}}>
      <Checkbox checked={checked} onClick={() => {
        onCheckedChange(itemData, !checked);
      }} />
      <div>{ itemData.id }</div>
      <div>: </div>
      <div>{ itemData.price }</div>
    </div>
  )
}, areEqual);


export default CartItem;