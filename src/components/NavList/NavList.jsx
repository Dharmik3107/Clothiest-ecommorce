import React from "react";
import { NavLink } from "react-router-dom";
import "./NavList.scss";

const NavList = () => {
	return (
		<div className="navlist-container">
			<NavLink to="shop" className="navitems">
				Shop
			</NavLink>
			<NavLink to="contact" className="navitems">
				Contact
			</NavLink>
			<NavLink to="about" className="navitems">
				About
			</NavLink>
		</div>
	);
};

export default NavList;
