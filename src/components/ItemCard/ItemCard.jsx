import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//Internal Imports - Assets
// import mainImage from "../../assets/Category/Men/1-1.webp";
import Wishlist from "../../assets/Wishlist.svg";
import WishlistFilled from "../../assets/WishlistFilled.svg";
import Bag from "../../assets/Bag.svg";

//Internal Imports - Context
import { CartContext } from "./../../contexts/cart";
import { UserContext } from "../../contexts/user";
import { WishlistContext } from "../../contexts/wishlist";

//Styling Sheets Imports
import "./ItemCard.scss";
import "react-toastify/dist/ReactToastify.css";

const CARD_STYLE = {
	him: "rgba(0,255,194,0.7)",
	her: "rgba(255, 0, 0, 0.2)",
};

const toast_parameters = {
	position: "bottom-center",
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: false,
	pauseOnHover: true,
	draggable: false,
	progress: undefined,
	theme: "light",
};

const ItemCard = ({ product, style }) => {
	const { addItem } = useContext(CartContext);
	const { currentUser } = useContext(UserContext);
	const { addItemTolist, removeItemFromList, itemIds } = useContext(WishlistContext);
	// const [isItemAddedToWishList, setItemAddedToWishList] = useState(false);

	const navigate = useNavigate();

	const handleAddCart = () => {
		if (currentUser) {
			addItem(product);
			toast.success("Product Added to Cart", toast_parameters);
		} else navigate("/login");
	};

	const handleAddWishList = () => {
		// setItemAddedToWishList((isItemAddedToWishList) => !isItemAddedToWishList);
		if (itemIds.includes(product.id)) removeItemFromList(product);
		else addItemTolist(product);
	};

	return (
		<div className="item-card-container" style={{ border: `1px solid ${CARD_STYLE[style]}` }}>
			<div className="main-image" style={{ backgroundImage: `url(https://${product.imageUrl})` }}></div>
			<h1 className="product-name">{product.name}</h1>
			<div className="icon-div">
				<h4>{product.price.current.text}</h4>
				<div className="card-like-icons">
					<button onClick={handleAddWishList}>{itemIds.includes(product.id) ? <img src={WishlistFilled} alt="Wishlist Filled" /> : <img src={Wishlist} alt="Wishlist" />}</button>
					<button>
						<img src={Bag} alt="Bag" onClick={handleAddCart} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
