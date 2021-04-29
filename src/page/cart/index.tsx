import React, { useState, useRef, useEffect, FC } from "react";
import CartItem from "./comps/cartItem";
import { useChecked } from "./hooks/useChecked";
import useRequest from "./hooks/useRequest";
import { Checkbox, Input } from "antd";

export interface CartDataItem {
  id: number;
  price: Number;
}

const initCartData: CartDataItem[] = [
  {
    id: 1,
    price: 32,
  },
  {
    id: 3,
    price: 20,
  },
  {
    id: 4,
    price: 19,
  },
  {
    id: 9,
    price: 10,
  },
  {
    id: 10,
    price: 30,
  },
];

const getCart: (id: number) => Promise<CartDataItem[]> = (id: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initCartData.slice(id));
    }, 1000);
  });
};
export default function Cart() {
  const [id, setId] = useState(2);
  const [cartData, loading] = useRequest<CartDataItem[]>(() => getCart(id), [
    id,
  ]);
  const {
    checkedMap,
    onCheckedAllChange,
    onCheckedChange,
    filterChecked,
    indeterminate,
    checkedAll,
    dispatch,
  } = useChecked(cartData);

  if (loading) {
    return <div>loading</div>;
  }

  const calcPrice = filterChecked().reduce(
    (total, cur) => (total += cur.price),
    0
  );

  const add = () => {
    setId(id - 1);
  };

  return (
    <>
      <div>
        <Input.Search onChange={console.log} />
        {cartData.map((item) => {
          const { id } = item;
          const checked = checkedMap[id];
          return (
            <CartItem
              key={id}
              itemData={item}
              checked={checked}
              onCheckedChange={onCheckedChange}
            />
          );
        })}
        <p>{"" + calcPrice}</p>
        <p>{"checkedAll: " + checkedAll}</p>
        <Checkbox
          checked={checkedAll}
          indeterminate={indeterminate}
          onChange={(e) => {
            if (e.target.checked) {
              onCheckedAllChange(true);
            } else {
              onCheckedAllChange(false);
            }
          }}
        />
        <button
          onClick={() => {
            onCheckedAllChange(true);
          }}
        >
          全选
        </button>
        <button
          onClick={() => {
            onCheckedAllChange(false);
          }}
        >
          清空
        </button>
        <button onClick={add}>添加</button>
      </div>
      <div>
        {filterChecked().map((item) => (
          <CheckedCartItem itemData={item} onCheckedChange={onCheckedChange} />
        ))}
      </div>
    </>
  );
}

const CheckedCartItem: FC<{
  itemData: CartDataItem;
  onCheckedChange: (dataItem: any, checked: any) => void;
}> = ({ itemData, onCheckedChange }) => (
  <div
    onClick={() => onCheckedChange(itemData, false)}
  >{`${itemData.id}: ${itemData.price}`}</div>
);
