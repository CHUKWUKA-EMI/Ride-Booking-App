import React, { useState } from "react";
import "./auth.css";

const Auth = (props) => {
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	const submitHandler = () => {
		if (
			userName.trim().length === 0 ||
			userEmail.trim().length === 0 ||
			userPassword.trim().length === 0
		) {
			return;
		}

		let requestBody = {
			query: `
		   query{
			login(email:"${userEmail}",password:"${userPassword}"){
				userId
				token
				tokenExpiration
			}
    }
		`,
		};

		if (!isLoggedIn) {
			requestBody = {
				query: `
		   mutation{
				createUser(userInput:{name:"${userName}",email:"${userEmail}",password:"${userPassword}"}){
					id
					name
					email
					password
				}
      }
		`,
			};
		}

		fetch("https://ride-booking-app.herokuapp.com/graphql", {
			method: "post",
			body: JSON.stringify(requestBody),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				if (res.status !== 200 && res.status !== 201) {
					throw new Error("Authentication Failed");
				}
				return res.json();
			})
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="form-class">
			<h1>{isLoggedIn ? "Login" : "Sign Up"}</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					submitHandler();
				}}>
				{!isLoggedIn && (
					<input
						type="text"
						id="username"
						name="username"
						value={userName}
						placeholder="Full Name"
						onChange={(e) => setUserName(e.target.value)}
					/>
				)}
				<br />
				<input
					type="email"
					id="email"
					name="email"
					value={userEmail}
					placeholder="Email"
					onChange={(e) => setUserEmail(e.target.value)}
				/>
				<br />
				<input
					type="password"
					id="password"
					name="password"
					value={userPassword}
					placeholder="Password"
					onChange={(e) => setUserPassword(e.target.value)}
				/>
				<br />
				<button type="submit">{isLoggedIn ? "Login" : "Sign Up"}</button>
				<p>
					{!isLoggedIn
						? "Already have an account?"
						: "You don't have an account yet?"}{" "}
					<a onClick={(e) => setIsLoggedIn(!isLoggedIn)}>
						{!isLoggedIn ? "Login" : "Sign Up"}
					</a>
				</p>
			</form>
		</div>
	);
};

export default Auth;
