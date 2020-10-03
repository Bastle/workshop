import React from 'react';

export default class Cat extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        this cat is in {this.props.mouse.x}, {this.props.mouse.y}
      </div>
    )
  }
}