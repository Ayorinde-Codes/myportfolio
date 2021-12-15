import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

function PrivateRoute({ component: Component, ...rest }) {
 
  return (

    <Route
      {...rest}
      render={props =>
        checkTokenExpirationMiddleware(localStorage.getItem("token")) ? (
          <Component {...props} />
        ) : (<Redirect
                to={{ pathname: "/login", 
                state: {from: props.location}
                    }}
              /> )
      }
    />
  );
}

const checkTokenExpirationMiddleware = (userToken) => 
{
    const token = userToken;

    if(token !=null)
    {
      const jwt = jwt_decode(token).exp;

      if(jwt < Date.now() / 1000)
      {
          localStorage.clear();
          
          return <Redirect to="/login" />; 
      }
    }

    return userToken;
}

export default PrivateRoute;

