import React, { useState, useContext } from "react";
import AuthContext from "../Context/context";
import makeRequest from ".././../Utils/index";
import "./auth.css";

const Auth = (props) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoggedIn, setIsLogIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const context = useContext(AuthContext);

  const submitHandler = () => {
    if (userEmail.trim().length === 0 || userPassword.trim().length === 0) {
      setErrorMessage("Input field cannot be Empty!");
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

    makeRequest({ data: requestBody })
      .then((resData) => {
        if (isLoggedIn) {
          context.login(
            resData.data.login.token,
            resData.data.login.userId,
            resData.data.login.tokenExpiration
          );
        }
        setSuccessMsg("Please log in");
        setIsLogIn(true);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        return;
      });
  };
  return (
    <div className="form-class">
      <h1>{isLoggedIn ? "Login" : "Sign Up"}</h1>
      <form
        data-testid="auth-form"
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        {errorMessage && <h3 className="err">{errorMessage}</h3>}

        {successMsg && (
          <h3
            style={{ fontWeight: "bold", color: "green", borderColor: "green" }}
          >
            {successMsg}
          </h3>
        )}

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
          data-testid="email"
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
        <button data-testid="submit-button" type="submit">
          {isLoggedIn ? "Login" : "Sign Up"}
        </button>
        <p>
          {!isLoggedIn
            ? "Already have an account?"
            : "You don't have an account yet?"}{" "}
          <span
            className="signup-link"
            data-testid="auth-link"
            onClick={(e) => setIsLogIn(!isLoggedIn)}
          >
            {!isLoggedIn ? "Login" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Auth;
