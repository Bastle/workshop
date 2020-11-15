import React, { useContext } from 'react';
import Context from '../context'

// export default class Hello extends React.Component {
//   render(){
//     return (
//       <Context.Consumer>
//         {
//           ({name, toggleName}) => <div onClick={toggleName}>{name} is name</div> 
//         }
//       </Context.Consumer>
//     )
//   }
// }

export default function Hello(){
  const { name, toggleName } = useContext(Context);
  return (
    <div onClick={toggleName}>{name} isisisiis name！</div> 
  )
}