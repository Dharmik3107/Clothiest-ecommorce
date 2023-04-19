import React, { useContext } from "react";
import "./Submenu.scss";
import { UserContext } from "./../../contexts/user";
import { signOutUser } from "../../utils/firebase/firebase";

const Submenu = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);

	const handleLogout = () => {
		signOutUser();
		setCurrentUser(null);
	};
	return (
		<div className="submenu-container">
			<div>
				<button>Your Cart</button>
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
