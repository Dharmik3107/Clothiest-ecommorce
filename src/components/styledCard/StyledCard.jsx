import React from "react";

//Internal Imports  - Components
import Button from "../Button/Button";

//Styling Sheets Imports
import "./StyledCard.scss";

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
