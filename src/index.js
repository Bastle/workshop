/**
 * Created by cyb on 2019/3/10.
 */

import './style/index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/reducer';
import ReactDOM from 'react-dom';
import React from 'react';
import ReduxApp from './page/redux';
import ContextApp from './page/context';

let store = createStore(todoApp);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      type: 'context'
    }
    this.changeUi = this.changeUi.bind(this);
  }
  changeUi(type){
    this.setState({type});
  }
  render(){
    console.log(this.state.type);
    return (
      <div>
        <div className="button-list">
          <button onClick={() => this.changeUi('context')}>切换到context</button>
          <button onClick={() => this.changeUi('redux')}>切换到redux</button>
        </div>
        {
          this.state.type === 'context' && <ContextApp />
        }
        {
          this.state.type === 'redux' && 
            <Provider store={store}>
              <ReduxApp />
            </Provider>
        }
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);