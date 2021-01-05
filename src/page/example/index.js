import React, {useState, useCallback} from 'react';

// export default class Example extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       flag: 'abc'
//     }
//   }
//   componentWillMount(){
//     setTimeout(() => {
//       this.setState({
//         flag: 'cba'
//       });
//     }, 1000);
//     // this.setState({
//     //   flag: 'cba'
//     // })
//   }
//   render(){
//     return (
//       <div>
//         {this.state.flag}
//       </div>
//     )
//   }
// }

const Example = () => {
  const [num, setNum] = useState(0);
  const callbackNum = useCallback(() => {}, [num])
  return (
    <div>
      {num}
      <button onClick={setNum(num + 1)}>add</button>
      <button onClick={() => {console.log(callbackNum)}}>add</button>
    </div>
  )
}