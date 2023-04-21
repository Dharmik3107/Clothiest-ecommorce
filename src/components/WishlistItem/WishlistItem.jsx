import React, { useContext } from "react";
import "./WishlistItem.scss";
import { WishlistContext } from "../../contexts/wishlist";

const WishlistItem = ({ product }) => {
	const { removeItemFromList } = useContext(WishlistContext);

	const handleDeleteItem = () => {
		removeItemFromList(product);
	};
	return (
		<div className="wishlist-item-container">
			<div className="name-image-container-wishlist">
				<img src={`https://${product.imageUrl}`} alt={product.name} className="product-image-wishlist" />
				<div className="name-price-wishlist">
					<h1>{product.name}</h1>
					<p>{product.price.current.text}</p>
				</div>
			</div>
			<div className="wishlist-actions">
				<button className="delete-wishlist" onClick={handleDeleteItem}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default WishlistItem;
