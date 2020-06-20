import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Auth from "./Components/Auth/auth";
import Bookings from "./Components/Bookings/Bookings";
import Trips from "./Components/Trips/Trips";
import PageNotFound from "./Components/404ErrorPage/404ErrorPage";
import AuthContext from "./Components/Context/context";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [userId, setUserId] = useState(null);

  const login = (token, userId, tokenExpiration) => {
    setToken(token);
    setUserId(userId);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("token", null);
  };
  React.useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth",

              state: { from: props.location },
            }}
          />
        )
      }
    />
  );

  return (
    <BrowserRouter>
      <React.Fragment>
        <AuthContext.Provider
          value={{
            token: token,
            userId: userId,
            login: login,
            logout: logout,
          }}
        >
          <NavBar onLogout={logout} />
          <Switch>
            <Redirect from="/" to="/auth" exact />
            {!token && <Route path="/auth" component={Auth} />}
            <PrivateRoute path="/bookings" component={Bookings} />
            {token && <Redirect from="/auth" to="/trips" exact />}
            <Route path="/trips" component={Trips} />
            <Route path="/*" component={PageNotFound} />
          </Switch>
        </AuthContext.Provider>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
