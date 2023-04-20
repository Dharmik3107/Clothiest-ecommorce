import React from "react";
import FilterIcon from "../../assets/Filter.svg";
import "./Filter.scss";

const Filter = ({ setMenuOpen }) => {
	const handleFilterClick = () => {
		setMenuOpen((isMenuOpen) => !isMenuOpen);
	};

	return <img src={FilterIcon} alt="FilterIcon" onClick={handleFilterClick} />;
};

export default Filter;
