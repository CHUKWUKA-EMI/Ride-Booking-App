import React, { useState, useContext } from "react";
import AuthContext from "../Context/context";
import makeRequest from ".././../Utils/index";
import "./auth.css";

const Auth = (props) => {
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [isLogIn, setIsLoggedIn] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	const context = useContext(AuthContext);

	const submitHandler = async () => {
		if (userEmail.trim().length === 0 || userPassword.trim().length === 0) {
			setErrorMessage("Input field cannot be Empty!");
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

		if (!isLogIn) {
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

		const result = await makeRequest({ data: requestBody })
			.then((resData) => {
				if (isLogIn) {
					context.login(
						resData.data.login.token,
						resData.data.login.userId,
						resData.data.login.tokenExpiration
					);
				}
				setErrorMessage("You can now log in");
			})
			.catch((err) => {
				setErrorMessage(err.message);
				return;
			});
	};
	return (
		<div className="form-class">
			<h1>{isLogIn ? "Login" : "Sign Up"}</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					submitHandler();
				}}>
				{errorMessage && <h3 className="err">{errorMessage}</h3>}
				{!isLogIn && (
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
				<button type="submit">{isLogIn ? "Login" : "Sign Up"}</button>
				<p>
					{!isLogIn
						? "Already have an account?"
						: "You don't have an account yet?"}{" "}
					<a onClick={(e) => setIsLoggedIn(!isLogIn)}>
						{!isLogIn ? "Login" : "Sign Up"}
					</a>
				</p>
			</form>
		</div>
	);
};

export default Auth;
