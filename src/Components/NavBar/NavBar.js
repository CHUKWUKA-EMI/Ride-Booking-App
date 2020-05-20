import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

class NavBar extends Component {
	render() {
		return (
			<div className="Nav">
				<h1>JusticeRides</h1>
				<div style={{ width: "90px" }}>
					<ul>
						<li>
							<NavLink to="/auth">Authentication</NavLink>
						</li>
						<li>
							<NavLink to="/trips">Trips</NavLink>
						</li>
						<li>
							<NavLink to="/bookings">Bookings</NavLink>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default NavBar;
