import React from "react";

//Internal Imports  - Assets
import { logoList } from "../../assets/Category/Logos";

//Internal Imports - Components
import "./LogosContainer.scss";

const LogosContainer = () => {
	return (
		<div className="logo-container">
			<h1>TRENDING BRANDS</h1>
			<div className="logos">
				{logoList.map((element) => {
					return <img key={element.id} src={element.imageUrl} alt={`logo-${element.id}`} />;
				})}
			</div>
		</div>
	);
};

export default LogosContainer;
