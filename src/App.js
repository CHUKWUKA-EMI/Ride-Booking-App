import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Auth from "./Components/Auth/auth";
import Bookings from "./Components/Bookings/Bookings";
import Trips from "./Components/Trips/Trips";

function App() {
	return (
		<BrowserRouter>
			<NavBar />

			<React.Fragment>
				<Switch>
					<Route path="/auth" component={Auth} />
					<Route path="/bookings" component={Bookings} />
					<Route path="/trips" component={Trips} />
				</Switch>
			</React.Fragment>
		</BrowserRouter>
	);
}

export default App;
