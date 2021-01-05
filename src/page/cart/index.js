import React, { useState, useRef } from 'react';
import CartItem from './comps/cartItem';
import { useChecked } from './hooks/useChecked';
import useRequest from './hooks/useRequest';
import { Checkbox, Input } from 'antd'

const initCartData = [
  {
    id: 1,
    price: 32
  },
  {
    id: 3,
    price: 20
  },
  {
    id: 4,
    price: 19
  },
  {
    id: 9,
    price: 10
  },
  {
    id: 10,
    price: 30
  }
]

const getCart = id => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initCartData.slice(id));
    }, 1000)
  })
}
export default function Cart(){
  const [id, setId] = useState(2);
  const [cartData, loading] = useRequest(() => getCart(id), [id])
  const { 
    checkedMap,
    onCheckedAllChange,
    onCheckedChange,
    filterChecked,
    indeterminate,
    checkedAll,
    dispatch
  } = useChecked(cartData);
  // const Checked(cartData = useChecked(cartData);

  if(loading){
    return <div>loading</div>
  }

  const calcPrice = filterChecked().reduce((total, cur) => total += cur.price, 0);

  const add = () => {
    setId(id - 1);
  }

  return (
    <>
      <div>
        <Input.Search onChange={
          console.log
        } />
        {
          cartData.map(item => {
            const { id } = item;
            const checked = checkedMap[id];
            return <CartItem
              key={id}
              itemData={item}
              checked={checked}
              onCheckedChange={onCheckedChange}
            />
          })
        }
        <p>{ '' + calcPrice }</p>
        <p>{'checkedAll: ' + checkedAll}</p>
        <Checkbox checked={checkedAll} indeterminate={indeterminate} onChange={e => {
          if(e.target.checked){
            onCheckedAllChange(true);
          } else {
            onCheckedAllChange(false);
          }
        }} />
        <button onClick={() => {
          onCheckedAllChange(true);
        }}>全选</button>
        <button onClick={() => {
          onCheckedAllChange(false);
        }}>清空</button>
        <button onClick={add}>添加</button>
      </div>
      <div>
        {filterChecked().map(item => <CheckedCartItem id={item.id} itemData={item} onCheckedChange={onCheckedChange} />)}
      </div>
    </>
  )
}

const CheckedCartItem = ({itemData, onCheckedChange}) => <div onClick={() => onCheckedChange(itemData, false)}>{`${itemData.id}: ${itemData.price}`}</div>

// export default function Cart(){
//   const [id, setId] = useState(0);
//   const [checkedMap, setCheckedMap] = useState({});
//   const myCheckedMap = useRef(checkedMap);
//   const [cartData, loading] = useRequest(() => getCart(id), [id])

//   if(loading){
//     return <div>loading</div>
//   }
//   const onCheckedChange = (cartItem, checked) => {
//     const { id } = cartItem;
//     const newCheckedMap = Object.assign({}, myCheckedMap.current, {
//       [id]: checked
//     });
//     myCheckedMap.current = newCheckedMap;
//     setCheckedMap(newCheckedMap);
//   }
//   const sumPrice = cartItems => {
//     return cartItems.reduce((price, item) => price += item.price, 0);
//   }
  
//   const filterChecked = () => {
//     return (
//       Object.entries(checkedMap)
//       .filter(entries => Boolean(entries[1]))
//       .map(([checkedId]) => cartData.find(({ id }) => id === Number(checkedId)))
//     )
//   }

//   const onCheckedAllChange = (checkedAll) => {
//     let newCheckedMap = {};
//     if(checkedAll){
//       cartData.forEach(item =>{
//         newCheckedMap[item.id] = true;
//       })
//     }
//     setCheckedMap(newCheckedMap);
//   }
//   const add = () => {
//     let newId = id + 1;
//     setId(newId);
//   }
  
//   const calcPrice = sumPrice(filterChecked());
//   const isCheckedAll = cartData.length !== 0 && filterChecked().length === cartData.length;
//   return (
//     <div>
//       {
//         cartData.map(item => {
//           const { id } = item;
//           const checked = checkedMap[id];
//           return <CartItem
//             key={id}
//             itemData={item}
//             checked={checked}
//             onCheckedChange={onCheckedChange}
//           />
//         })
//       }
//       <p>{ '' + calcPrice }</p>
//       <p>{'isCheckedAll: ' + isCheckedAll}</p>
//       <button onClick={() => {
//         onCheckedAllChange(true);
//       }}>全选</button>
//       <button onClick={() => {
//         onCheckedAllChange(false);
//       }}>清空</button>
//       <button onClick={add}>添加</button>
//     </div>
//   )
// }