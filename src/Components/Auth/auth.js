import React from "react";
import "./auth.css";

const Auth = (props) => {
	return (
		<div className="form-class">
			<h1>Sign Up</h1>
			<form>
				<input
					type="text"
					id="username"
					name="username"
					placeholder="Full Name"
				/>
				<br />
				<input type="email" id="email" name="email" placeholder="Email" />
				<br />
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Password"
				/>
				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Auth;
