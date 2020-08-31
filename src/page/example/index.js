import React from 'react';

export default class Example extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      flag: 'abc'
    }
  }
  componentWillMount(){
    setTimeout(() => {
      this.setState({
        flag: 'cba'
      });
    }, 1000);
    // this.setState({
    //   flag: 'cba'
    // })
  }
  render(){
    return (
      <div>
        {this.state.flag}
      </div>
    )
  }
}