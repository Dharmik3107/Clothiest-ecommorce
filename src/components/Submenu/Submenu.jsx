import React, { useContext } from "react";
import "./Submenu.scss";
import { UserContext } from "./../../contexts/user";
import { signOutUser } from "../../utils/firebase/firebase";

const Submenu = ({ setCartOpen }) => {
	const { currentUser, setCurrentUser } = useContext(UserContext);

	const handleLogout = () => {
		signOutUser();
		setCurrentUser(null);
	};

	const handleCartClick = () => {
		setCartOpen(true);
	};
	return (
		<div className="submenu-container">
			<div>
				<button onClick={handleCartClick}>Your Cart</button>
			</div>
			<div>
				<button>Your Wishlist</button>
			</div>
			<div className="logout-container">
				<button onClick={handleLogout}>Logout</button>
			</div>
		</div>
	);
};

export default Submenu;
