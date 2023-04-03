import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Search from "./../../components/Search/Search";
import LoginButton from "../../components/LoginButton/LoginButton";
import "./Sidebar.scss";

const Sidebar = () => {
	const { pathname } = useLocation();
	const isLoginPage = pathname === "/login";
	const isRegisterPage = pathname === "/register";
	const isHomePage = pathname === "/";
	return (
		<div className="sidelist-container">
			<NavLink to="men" className="navitems">
				Men
			</NavLink>
			<NavLink to="women" className="navitems">
				Women
			</NavLink>
			<NavLink to="contact" className="navitems">
				Contact
			</NavLink>
			<LoginButton text={isLoginPage ? "Register" : "Login"} path={isLoginPage ? "register" : "login"} />
		</div>
	);
};

export default Sidebar;
