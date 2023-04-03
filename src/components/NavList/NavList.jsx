import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Search from "./../../components/Search/Search";
import LoginButton from "../../components/LoginButton/LoginButton";
import { Turn as Hamburger } from "hamburger-react";

import "./NavList.scss";
import Sidebar from "../Sidebar/Sidebar";

const NavList = () => {
	const [isOpen, setOpen] = useState(false);

	const { pathname } = useLocation();
	const isLoginPage = pathname === "/login";
	const isRegisterPage = pathname === "/register";
	const isHomePage = pathname === "/";
	return (
		<>
			<div className="navlist-container">
				{!isLoginPage && !isRegisterPage && !isHomePage && <Search />}
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
			<div className="hamburger-container">
				<Hamburger color="#000" toggled={isOpen} toggle={setOpen} direction="left" label="show menu" duration={0.4} />
			</div>
			{isOpen && <Sidebar />}
		</>
	);
};

export default NavList;
