import React from 'react';
import Context from './context';
import Hello from './components/Hello';

export default class ContextApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'cba'
    }
    this.changeName = this.changeName.bind(this);
    this.toggleName = this.toggleName.bind(this);
  }
  toggleName(){
    this.setState({
      name: this.state.name === 'abc' ? 'cba' : 'abc'
    })
  }
  changeName() {
    this.setState(prevState => ({name: 'a' + prevState.name}));
  }
  render(){
    return (
      <div>
        <button onClick={this.changeName}>change name</button>
        <Context.Provider value={{
          name: this.state.name,
          toggleName: this.toggleName
        }}>
          <Hello />
        </Context.Provider>
      </div>
    )
  }
}

