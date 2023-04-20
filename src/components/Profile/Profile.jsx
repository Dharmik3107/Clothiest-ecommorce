import React, { useState } from "react";

//Internal Imports - Components
import Submenu from "../Submenu/Submenu";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

//Styling Sheets Imports
import "./Profile.scss";

const Profile = ({ imageUrl }) => {
	const [isSubmenuOpen, setSubmenuOpen] = useState(false);
	const [isCartOpen, setCartOpen] = useState(false);

	const handleProfileClick = () => {
		setSubmenuOpen((isSubmenuOpen) => !isSubmenuOpen);
	};

	const handleProfileBlur = () => {
		setSubmenuOpen(false);
	};
	return (
		<>
			<div className="profile-button">
				<img src={imageUrl} referrerPolicy="no-referrer" onClick={handleProfileClick} onBlur={handleProfileBlur}></img>
				{isSubmenuOpen && <Submenu setCartOpen={setCartOpen} />}
			</div>
			<ShoppingCart isCartOpen={isCartOpen} setCartOpen={setCartOpen} />
		</>
	);
};

export default Profile;
