import React from "react";

//Internal Imports - Assets
import mainImage from "../../assets/Category/Men/1-1.webp";
import Wishlist from "../../assets/Wishlist.svg";
import Bag from "../../assets/Bag.svg";

//Styling Sheets Imports
import "./ItemCard.scss";
import { Link } from "react-router-dom";

const CARD_STYLE = {
	him: "rgba(0,255,194,0.7)",
	her: "rgba(255, 0, 0, 0.2)",
};

const ItemCard = ({ product, style }) => {
	return (
		<div className="item-card-container" style={{ border: `1px solid ${CARD_STYLE[style]}` }}>
			<div className="main-image" style={{ backgroundImage: `url(https://${product.imageUrl})` }}></div>
			<h1 className="product-name">{product.name}</h1>
			<div className="icon-div">
				<h4>{product.price.current.text}</h4>
				<div className="card-like-icons">
					<button>
						<img src={Wishlist} alt="Wishlist" />
					</button>
					<button>
						<img src={Bag} alt="Bag" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
