/**
 * Created by cyb on 2019/3/10.
 */

import "./style/index.less";
import { Provider } from "react-redux";
import store from "./store";
import ReactDOM from "react-dom";
import React from "react";
import route from "./router";
import config from "./router/config";
import { BrowserRouter, Switch, Link } from "react-router-dom";
import { Modal } from 'antd'
import 'antd/dist/antd.css'; 
import useFps from "./hooks/useFps";

console.log("config: ", config);

const getConfirmation = (message, callback) => {
  Modal.confirm({
    title: message,
    onCancel: () => {
      callback(false);
    },
    onOk: () => {
      callback(true);
    }
  });
};

const App = () => {
  // const [fps, stop, start] = useFps()
  return (
    <>
    {/* <p>{fps}</p> */}
    {/* <button onClick={stop}>stop</button>
    <button onClick={start}>start</button> */}
    <Provider store={store}>
      <BrowserRouter getUserConfirmation={getConfirmation}>
        {config.map(
          ({ path, title, hideEntry }) =>
            !hideEntry && (
              <Link key={path} to={path}>
                <button>{title}</button>
              </Link>
            )
        )}
        <Switch>{route}</Switch>
      </BrowserRouter>
    </Provider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
