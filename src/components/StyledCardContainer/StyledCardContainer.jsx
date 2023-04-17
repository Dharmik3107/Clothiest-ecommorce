import React from "react";
import "./StyledCardContainer.scss";
import Stylish from "../../assets/Category/Stylish.webp";
import Sold from "../../assets/Category/sold.webp";
import StyledCard from "../styledCard/StyledCard";

const StyledCardContainer = () => {
	return (
		<div className="styled-card-container">
			<StyledCard image={Stylish} text="FEELIN' STYLISH" />
			<StyledCard image={Sold} text="FAST SELLING" />
		</div>
	);
};

export default StyledCardContainer;
