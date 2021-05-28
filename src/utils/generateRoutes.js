import React from "react";
import { Route, Link } from "react-router-dom";
import PrivateRoute from "../router/privateRoute/index.jsx";

export const generateRoutes = (config) =>
  config.map(
    ({ path, component, exact, isPrivate, hideEntry, ...rest }, index) => {
      if (hideEntry) {
        return null;
      }
      if (isPrivate) {
        return (
          <PrivateRoute
            key={path}
            path={path}
            component={component}
            exact={exact}
            {...rest}
          />
        );
      }
      return (
        <Route
          key={path}
          path={path}
          component={component}
          exact={exact}
          {...rest}
        />
      );
    }
  );
