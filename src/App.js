import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Auth from "./Components/Auth/auth";
import Bookings from "./Components/Bookings/Bookings";
import Trips from "./Components/Trips/Trips";
import AuthContext from "./Components/Context/context";

function App() {
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);

	const login = (token, userId, tokenExpiration) => {
		setToken(token);
		setUserId(userId);
		localStorage.setItem("token", token);
	};

	const logout = () => {
		setToken(null);
		setUserId(null);
		localStorage.setItem("token", "");
	};
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
					}}>
					<NavBar onLogout={logout} />
					<Switch>
						{!token && <Route path="/auth" component={Auth} />}
						<Route path="/bookings" component={Bookings} />
						<Route path="/trips" component={Trips} />
						<Redirect from="/" to="/auth" />}
						{token && <Redirect from="/auth" to="/bookings" />}
					</Switch>
				</AuthContext.Provider>
			</React.Fragment>
		</BrowserRouter>
	);
}

export default App;
