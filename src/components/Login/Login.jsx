import React from "react";
import LoginIcon from "../../assets/LoginIcon.svg";
import "./Login.scss";

const Login = () => {
	return (
		<div className="login-container">
			<img src={LoginIcon} alt="Login Icon" className="login-image" />
			<button className="login-button">Log in</button>
		</div>
	);
};

export default Login;
