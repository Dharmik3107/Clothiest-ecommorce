import React, { useContext } from "react";

//Internal Imports - Assets
import CartIcon from "../../assets/CartIcon.svg";

//Internal Imports - Context
import { CartContext } from "./../../contexts/cart";

//Styling sheets Imports
import "./Cart.scss";

const Cart = () => {
	const { cartItems, setCartItems } = useContext(CartContext);

	return <img src={CartIcon} alt="Cart Icon" className="cart-icon" />;
};

export default Cart;
