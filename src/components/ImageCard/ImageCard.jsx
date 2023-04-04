import React from "react";
import "./ImageCard.scss";

const CARD_CLASSES = {
	default: "default-type-card",
	feed: "feed-type-card",
};

const ImageCard = ({ cardType, text, image, isButton, ...otherProps }) => {
	return (
		<div className={`${CARD_CLASSES[cardType]}`} {...otherProps}>
			<img src={image} alt={`${text}`} />
			<p>{text}</p>
			{isButton && <button className="inverted-button">Buy Now</button>}
		</div>
	);
};

export default ImageCard;
