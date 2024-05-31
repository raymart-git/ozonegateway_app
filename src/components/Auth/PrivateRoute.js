import React from "react";
import { Route, Redirect } from "react-router-dom";
import loginService from "../../service/api/login.service"; // Adjust the path as needed

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
        loginService.getToken() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/auth/signin" />
      )
    }
  />
);

export default PrivateRoute;