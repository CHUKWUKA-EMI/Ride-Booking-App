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
	};

	const logout = () => {
		setToken(null);
		setUserId(null);
	};
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
						<Route path="/auth" component={Auth} />
						{token && <Route path="/bookings" component={Bookings} />}
						<Route path="/trips" component={Trips} />
						{!token && <Redirect from="/bookings" to="/auth" />}

						{!token && <Redirect from="/" to="/auth" />}
					</Switch>
				</AuthContext.Provider>
			</React.Fragment>
		</BrowserRouter>
	);
}

export default App;
