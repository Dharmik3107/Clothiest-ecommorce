import React, { useContext } from "react";

//Internal Imports - Assets
import Trash from "../../assets/Trash.svg";

//Internal Imports - Context
import { CartContext } from "../../contexts/cart";

//Styling sheet imports
import "./CartItem.scss";

const CartItem = ({ product }) => {
	const { addItem, removeItem, clearItem } = useContext(CartContext);

	const handleDeleteItem = () => {
		clearItem(product);
	};
	const handleIncreaseItem = () => {
		addItem(product);
	};
	const handleDecreaseItem = () => {
		removeItem(product);
	};
	return (
		<div className="cart-item-container">
			<img src={`https://${product.imageUrl}`} alt={product.name} className="product-image-cart" />
			<div className="name-price">
				<h1>{product.name}</h1>
				<p>{product.price.current.text}</p>
			</div>
			<div className="quantity">
				<button onClick={handleDecreaseItem}>-</button>
				<p>{product.quantity}</p>
				<button onClick={handleIncreaseItem}>+</button>
			</div>
			<button className="delete" onClick={handleDeleteItem}>
				<img src={Trash} alt="trash-icon" />
			</button>
		</div>
	);
};

export default CartItem;
