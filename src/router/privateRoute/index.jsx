import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ isLogin, location, component: Com, path }) => {
  const redirect = location.pathname;
  return (
    <Route
      path={path}
      render={(props) => {
        return isLogin ? (
          <Com {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { redirect },
            }}
          />
        );
      }}
    />
  );
}
export default connect((state) => ({
  isLogin: state.user.isLogin,
}))(PrivateRoute);
