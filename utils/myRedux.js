
export function createStore(reducers,  enhancer){
  if(enhancer){
    return enhancer(createStore)(reducers);
  }
  let state;
  let listeners = [];
  function getState () {
    return state;
  }
  function dispatch (action) {
    state = reducers(state, action);
    listeners.map(cb => cb());
  }
  function subscribe (cb) {
    listeners.push(cb);
    return function unsubscribe () {
      let index = listeners.indexOf(cb);
      listeners.splice(index, 1);
    }
  }
  dispatch({type: '$INITIAL_MY_REDUX_STATE'});
  return { dispatch, getState, subscribe };
}

export function applyMiddleware(...middleware){
  return createStore => (...args) => {
    const store = createStore(...args);
    const midApi = {
      getState: store.getState,
      dispatch: store.dispatch
    }
    const chain = middleware.map(mw => mw(midApi));
    const dispatch = compose(...chain)(store.dispatch);
    return {
      getState: store.getState,
      subscribe: store.subscribe,
      dispatch
    }
  } 
}

function compose(...funcs){
  if(funcs.length === 0){
    return arg => arg;
  }
  if(funcs.length === 1){
    return funcs[0];
  }
  return funcs.reduceRight((a, b) => (...args) => b(a(...args)));
}