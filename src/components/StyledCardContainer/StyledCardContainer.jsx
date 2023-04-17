import React from "react";

//Internal Imports - Assets
import Stylish from "../../assets/Category/Stylish.webp";
import Sold from "../../assets/Category/sold.webp";

//Internal Imports - Components
import StyledCard from "../styledCard/StyledCard";

//Styling Imports
import "./StyledCardContainer.scss";

const StyledCardContainer = () => {
	return (
		<div className="styled-card-container">
			<StyledCard image={Stylish} text="FEELIN' STYLISH" />
			<StyledCard image={Sold} text="FAST SELLING" />
		</div>
	);
};

export default StyledCardContainer;
