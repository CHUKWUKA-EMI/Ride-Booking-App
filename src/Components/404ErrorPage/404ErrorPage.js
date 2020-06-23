import React from "react";
import { NavLink } from "react-router-dom";
import "./404ErrorPage.css";

const PageNotFound = () => {
  return (
    <div data-testid="error-page" className="error-page">
      <h2>404</h2>
      <h3>Page Not Found!</h3>
      <p>
        <li>
          Go back to
          <NavLink to="/auth"> Home Page</NavLink>
        </li>
      </p>
    </div>
  );
};

export default PageNotFound;
