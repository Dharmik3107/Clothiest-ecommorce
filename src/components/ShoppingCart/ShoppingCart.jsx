import React, { useContext } from "react";

//Internal Imports - Components
import CartItem from "../CartItem/CartItem";
import CartFooter from "../CartFooter/CartFooter";

//Internal Imports - Assets
import Back from "../../assets/Back.svg";

//Internal Imports - Context
import { CartContext } from "../../contexts/cart";

//Styling Sheet imports
import "./ShoppingCart.scss";

const ShoppingCart = ({ isCartOpen, setCartOpen }) => {
	const { cartItems } = useContext(CartContext);

	const handleCartClose = () => {
		setCartOpen(false);
	};

	return (
		<div className={`shopping-container ${isCartOpen ? "active" : ""}`}>
			<img src={Back} alt="Back Arrow" className="back-arrow" onClick={handleCartClose} />
			<div className="cart-heading">
				<h1>YOUR CART</h1>
			</div>
			<div className="cart-items">
				{cartItems.map((element, index) => {
					return <CartItem key={index} product={element} />;
				})}
			</div>
			<CartFooter />
		</div>
	);
};

export default ShoppingCart;
