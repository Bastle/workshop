import React, { useContext } from 'react';

const Context = React.createContext(null);

export const Provider = props => {
  return <Context.Provider value={props.store}>
    { props.children }
  </Context.Provider>
}

export const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => {
  return wrapedComponent => {
    return () => {
      const store = useContext(Context);
      const getPorps = () => {
        const statePorps = mapStateToProps(store.getState());
        const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch);
      };
      const [props, useProps] = useState(getPorps())
      return <wrapedComponent {...props} />
    } 
  }
}

function bindActionCreators(creators, dispatch){
  return 
}

export const connect2 = function (mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent){
    return class extends Component {
      constructor(props){
        super(props);
        this.state = {
          
        }
      }
      render(){
        const props = Object.assign(this.state, this.props)
        return <WrappedComponent {...props} />
      }
    }
  }
}