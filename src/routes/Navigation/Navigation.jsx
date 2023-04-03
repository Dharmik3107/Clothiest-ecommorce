import React, { useContext } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Search from "./../../components/Search/Search";
import LoginButton from "../../components/LoginButton/LoginButton";
import Cart from "./../../components/Cart/Cart";
import NavList from "./../../components/NavList/NavList";
import "./Navigation.scss";
import Footer from "./../../components/Footer/Footer";
import { UserContext } from "../../contexts/user";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);

	const { pathname } = useLocation();
	const isLoginPage = pathname === "/login";
	const isRegisterPage = pathname === "/register";
	const isHomePage = pathname === "/";

	return (
		<main className="main-body">
			<nav className="navigation-container">
				<Link to="/" className={`home-page-navigator ${isHomePage ? "text-shadow" : ""}`}>
					<div className="title-container">
						<h1>Clothiest</h1>
					</div>
				</Link>
				<NavList />
			</nav>
			<section className="content-section">
				<Outlet />
			</section>
			{/* {!isLoginPage && !isRegisterPage && <Footer />} */}
		</main>
	);
};

export default Navigation;
