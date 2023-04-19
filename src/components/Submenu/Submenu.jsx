import React from "react";
import "./Submenu.scss";

const Submenu = () => {
	return (
		<div className="submenu-container">
			<div>
				<button>Your Cart</button>
			</div>
			<div>
				<button>Your Wishlist</button>
			</div>
			<div>
				<button>Logout</button>
			</div>
		</div>
	);
};

export default Submenu;
