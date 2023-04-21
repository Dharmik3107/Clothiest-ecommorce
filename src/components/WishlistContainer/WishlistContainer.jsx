import React, { useContext } from "react";

import WishlistItem from "../WishlistItem/WishlistItem";

import { WishlistContext } from "../../contexts/wishlist";

import Back from "../../assets/Back.svg";

import "./WishlistContainer.scss";

const WishlistContainer = ({ isWishlistOpen, setWishlistOpen }) => {
	const { wishlistItems, setWishlistItems, setItemIds } = useContext(WishlistContext);

	const handleWishlistClose = () => {
		setWishlistOpen(false);
	};

	const handleClearAllWishlist = () => {
		setWishlistItems([]);
		setItemIds([]);
	};

	return (
		<div className={`wishlist-container ${isWishlistOpen ? "active" : ""}`}>
			<img src={Back} alt="Back Arrow" className="back-arrow" onClick={handleWishlistClose} />
			<div className="wishlist-heading">
				<h1>YOUR WISHLIST</h1>
			</div>
			<div className="wishlist-items">
				<button className="clear-wishlist" onClick={handleClearAllWishlist}>
					Clear Wishlist
				</button>
				{wishlistItems.map((element, index) => {
					return <WishlistItem key={index} product={element} />;
				})}
			</div>
		</div>
	);
};

export default WishlistContainer;
