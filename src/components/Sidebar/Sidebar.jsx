import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";

//Internal Imports - Components
import LoginButton from "../../components/LoginButton/LoginButton";

//Internal Imports - Context
import { UserContext } from "../../contexts/user";

//Internal Imports - Firebase
import { signOutUser } from "../../utils/firebase/firebase";

//Styling Sheets Imports
import "./Sidebar.scss";

const Sidebar = () => {
	const { pathname } = useLocation();
	const isLoginPage = pathname === "/login";

	const { currentUser, setCurrentUser } = useContext(UserContext);

	const handleLogout = () => {
		signOutUser();
		setCurrentUser(null);
	};
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
			{currentUser ? (
				<button className="logout-button" onClick={handleLogout}>
					Logout
				</button>
			) : (
				<LoginButton text={isLoginPage ? "Register" : "Login"} path={isLoginPage ? "register" : "login"} />
			)}
		</div>
	);
};

export default Sidebar;
