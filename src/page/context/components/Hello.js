import React from 'react';
import Context from '../context'

export default class Hello extends React.Component {
  render(){
    return (
      <Context.Consumer>
        {
          ({name, toggleName}) => <div onClick={toggleName}>{name} is name</div> 
        }
      </Context.Consumer>
    )
  }
}