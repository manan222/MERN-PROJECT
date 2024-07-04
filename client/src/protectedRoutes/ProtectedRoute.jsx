import React from "react";
import { Route, Navigate } from "react-router-dom";

// This component takes in the isAuthenticated prop and the Component to render
// If isAuthenticated is true, it renders the Component, otherwise, it redirects to the login page

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  console.log("component:", Component, "is logged in:", isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default PrivateRoute;
