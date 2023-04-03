import React, { useState } from "react";
import LoginIcon from "../../assets/LoginIcon.svg";
import "./LoginButton.scss";
import { Link, useLocation } from "react-router-dom";

const LoginButton = ({ text, path }) => {
	const [isOpen, setOpen] = useState(false);
	const { pathname } = useLocation();

	const isHomePage = pathname === "/";

	return (
		<Link to={path} className="login-nav-container">
			{/* <img src={LoginIcon} alt="Login Icon" className="login-image" /> */}
			<button className={`login-button ${isHomePage ? "text-shadow" : ""}`}>{text}</button>
		</Link>
	);
};

export default LoginButton;
