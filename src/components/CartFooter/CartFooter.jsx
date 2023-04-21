import React, { useContext } from "react";

import Button from "./../Button/Button";

import { CartContext } from "../../contexts/cart";

import "./CartFooter.scss";

const CartFooter = () => {
	const { totalQuantity, totalAmount, setCartItems } = useContext(CartContext);

	const handleClearAll = () => {
		setCartItems([]);
	};
	return (
		<div className="cart-footer">
			<div className="cart-information">
				<h5>Total Qunatity: {totalQuantity}</h5>
				<h1>Total Amount: ${totalAmount}</h1>
			</div>
			<div className="cart-footer-buttons">
				<Button buttonType="inverted" text="Checkout" />
				<Button buttonType="inverted" text="Clear All" onClick={handleClearAll} />
			</div>
		</div>
	);
};

export default CartFooter;
