import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { UserProvider } from "./context/UserContext"; 

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";
import PrivateRoute from "components/Auth/PrivateRoute";

ReactDOM.render(
  <UserProvider>
    <HashRouter>
      <Switch>
        <Route path={`/auth`} component={AuthLayout} />
        <PrivateRoute path={`/admin`} component={AdminLayout} />
        <PrivateRoute path={`/rtl`} component={RTLLayout} />
        <Redirect from={`/`} to='/auth/signin' />
      </Switch>
    </HashRouter>
  </UserProvider>,
  document.getElementById("root")
);
