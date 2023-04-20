import React from "react";
import { useLocation } from "react-router-dom";

//Internal Imports - Componets
import { MEN_CATEGORIES } from "../../routes/Category/Men";
import { WOMEN_CATEGORIES } from "../../routes/Category/Women";

//Styling Sheets Imports
import "./FilterMenu.scss";

const FilterMenu = ({ isFilter, setFilter }) => {
	const path = useLocation().pathname;
	const isMenPage = path === "/men";

	const handleFilter = (event) => {
		setFilter(event.target.value);
	};

	const categories = isMenPage ? MEN_CATEGORIES : WOMEN_CATEGORIES;

	return (
		<div className="filter-menu">
			<button value={null} onClick={handleFilter} className={`filter-button`}>
				Remove Filter
			</button>
			{categories.map((element, index) => (
				<button key={index} value={element} onClick={handleFilter} className={`filter-button ${isFilter === element ? "active" : ""}`}>
					{element}
				</button>
			))}
		</div>
	);
};

export default FilterMenu;
