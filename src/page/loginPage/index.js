import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginSuccess } from '../../store/action/action';
// class LoginPage extends React.Component {
//   render(){
//     console.log('loginpageprops ----->',this.props);
//     if(this.props.isLogin){
//       return <Redirect 
//         to={{
//           pathname :this.props.location.state.redirect || '/',
//           state: 12345
//         }} 
//       />
//     }
//     return (
//       <div>
//         <p>loginPage</p>
//         <Name name={this.props.name} />
//         <button onClick={() => {this.props.login('rose')}}>登录</button>
//       </div>
//     )
//   }
// }
function LoginPage (props){
  console.log('loginpageprops ----->',props);
  if(props.isLogin){
    return <Redirect 
      to={{
        pathname :props.location.state.redirect || '/',
        state: 12345
      }} 
    />
  }
  return (
    <div>
      <p>loginPage</p>
      <Name name={props.name} />
      <button onClick={() => {props.login('rose')}}>登录</button>
    </div>
  )
}
function Name(props){
  console.log('-------name props----> ', props)
  return (
    <div>component name: {props.name}</div>
  )
}
export default connect(
  state => ({
    name: state.user.name, 
    isLogin: state.user.isLogin
  }),
  {
    login: name => loginSuccess(name)
  }
)(LoginPage);

