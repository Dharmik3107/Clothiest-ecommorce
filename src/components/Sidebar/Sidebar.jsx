import React from "react";
import { NavLink, useLocation } from "react-router-dom";

//Internal Imports - Components
import LoginButton from "../../components/LoginButton/LoginButton";

//Styling Sheets Imports
import "./Sidebar.scss";

const Sidebar = () => {
	const { pathname } = useLocation();
	const isLoginPage = pathname === "/login";

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
