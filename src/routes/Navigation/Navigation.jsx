import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Navigation.scss";
import Search from "./../../components/Search/Search";
import Login from "../../components/Login/Login";
import Cart from "./../../components/Cart/Cart";
import NavList from "./../../components/NavList/NavList";

const Navigation = () => {
	return (
		<main>
			I am Navigation
			<nav>
				<div>
					<h1>Clothiest</h1>
					<h5>Premium Clothes</h5>
				</div>
				<NavList />
				<div>
					<Search />
					<Login />
					<Cart />
				</div>
			</nav>
			<section>
				<Outlet />
			</section>
		</main>
	);
};

export default Navigation;
