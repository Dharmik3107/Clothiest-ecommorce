import React from "react";
import { Link, useLocation } from "react-router-dom";

//Styling Sheets Imports
import "./LoginButton.scss";

const LoginButton = ({ text, path }) => {
	const { pathname } = useLocation();
	const isHomePage = pathname === "/";

	return (
		<Link to={path} className="login-nav-container">
			<button className={`login-button ${isHomePage ? "text-shadow" : ""}`}>{text}</button>
		</Link>
	);
};

export default LoginButton;
