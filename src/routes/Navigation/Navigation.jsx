import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Search from "./../../components/Search/Search";
import Login from "../../components/Login/Login";
import Cart from "./../../components/Cart/Cart";
import NavList from "./../../components/NavList/NavList";
import "./Navigation.scss";

const Navigation = () => {
	return (
		<main className="main-body">
			<nav className="navigation-container">
				<div className="title-container">
					<h1>Clothiest</h1>
					<h5>Premium Clothes</h5>
				</div>
				<NavList />
				<div className="utility-container">
					<Search />
					<Login />
					<Cart />
				</div>
			</nav>
			<section className="content-section">
				<Outlet />
			</section>
		</main>
	);
};

export default Navigation;
