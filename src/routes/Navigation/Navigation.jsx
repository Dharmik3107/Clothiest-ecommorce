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
	console.log(currentUser);

	const { pathname } = useLocation();
	const isLoginPage = pathname === "/login";
	const isRegisterPage = pathname === "/register";

	return (
		<main className="main-body">
			<nav className="navigation-container">
				<Link to="/" className="home-page-navigator">
					<div className="title-container">
						<h1>Clothiest</h1>
						<h5>Premium Clothes</h5>
					</div>
				</Link>
				<NavList />
				<div className="utility-container">
					{!isLoginPage && !isRegisterPage && <Search />}
					<LoginButton text={isLoginPage ? "Register" : "Login"} path={isLoginPage ? "register" : "login"} />
					{!isLoginPage && !isRegisterPage && <Cart />}
				</div>
			</nav>
			<section className="content-section">
				<Outlet />
			</section>
			{!isLoginPage && !isRegisterPage && <Footer />}
		</main>
	);
};

export default Navigation;
