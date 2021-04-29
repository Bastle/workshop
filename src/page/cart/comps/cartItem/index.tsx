import React, { FC } from "react";
import Checkbox from "antd/es/checkbox";
import "antd/es/checkbox/style/index.css";
import { CartDataItem } from "../../index";

interface CartItemProps {
  checked: boolean;
  itemData: CartDataItem;
  onCheckedChange: (dataItem: any, checked: any) => void;
}

function areEqual(prevProps: CartItemProps, nextProps: CartItemProps) {
  return prevProps.checked === nextProps.checked;
}

const CartItem: FC<CartItemProps> = React.memo(
  ({ checked, itemData, onCheckedChange }) => {
    console.log("render");
    return (
      <div style={{ display: "flex" }}>
        <Checkbox
          checked={checked}
          onClick={() => {
            onCheckedChange(itemData, !checked);
          }}
        />
        <div>{itemData.id}</div>
        <div>: </div>
        <div>{itemData.price}</div>
      </div>
    );
  },
  areEqual
);

export default CartItem;
