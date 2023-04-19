import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";

//Intenal Imports - Components
import Search from "./../../components/Search/Search";
import LoginButton from "../../components/LoginButton/LoginButton";
import Sidebar from "../Sidebar/Sidebar";

//Internal Imports - Contexts
import { UserContext } from "../../contexts/user";

//Styling Sheets Imports
import "./NavList.scss";

const NavList = () => {
	const [isOpen, setOpen] = useState(false);

	const { pathname } = useLocation();
	const isLoginPage = pathname === "/login";
	const isHomePage = pathname === "/";

	const { currentUser } = useContext(UserContext);
	console.log(currentUser);
	return (
		<>
			<div className="navlist-container">
				<NavLink to="men" className={`navitems ${isHomePage ? "text-shadow" : ""}`}>
					Men
				</NavLink>
				<NavLink to="women" className={`navitems ${isHomePage ? "text-shadow" : ""}`}>
					Women
				</NavLink>
				<NavLink to="contact" className={`navitems ${isHomePage ? "text-shadow" : ""}`}>
					Contact
				</NavLink>
				<LoginButton text={isLoginPage ? "Register" : "Login"} path={isLoginPage ? "register" : "login"} />
			</div>
			<div className="hamburger-container">
				<Hamburger color="#000" toggled={isOpen} toggle={setOpen} direction="left" label="show menu" duration={0.4} />
			</div>
			{isOpen && <Sidebar />}
		</>
	);
};

export default NavList;
