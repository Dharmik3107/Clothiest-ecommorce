import React from "react";

//Internal Imports - Assets
import SearchIcon from "../../assets/SearchIcon.svg";

//Styling Sheets Imports
import "./Search.scss";

const Search = () => {
	return (
		<div className="search-container">
			<img src={SearchIcon} alt="Search Icon" className="search-icon" />
		</div>
	);
};

export default Search;
