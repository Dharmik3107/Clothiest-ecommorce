import React from "react";
import "./StyledCard.scss";
import Button from "../Button/Button";

const StyledCard = ({ text, image }) => {
	return (
		<div className="styled-container">
			<img src={image} alt={text} className="styled-image" />
			<h1 className="styled-text">{text}</h1>
			<Button text="Buy Now" buttonType="default" />
		</div>
	);
};

export default StyledCard;
