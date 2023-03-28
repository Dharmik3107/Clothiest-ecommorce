import React from "react";
import LoginIcon from "../../assets/LoginIcon.svg";
import "./LoginButton.scss";
import { Link } from "react-router-dom";

const LoginButton = () => {
	return (
		<Link to="login" className="login-container">
			<img src={LoginIcon} alt="Login Icon" className="login-image" />
			<button className="login-button">Log in</button>
		</Link>
	);
};

export default LoginButton;
