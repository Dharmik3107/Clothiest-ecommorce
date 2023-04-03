import React from "react";
import SearchIcon from "../../assets/SearchIcon.svg";
import "./Search.scss";

const Search = () => {
	return (
		<div className="search-container">
			<img src={SearchIcon} alt="Search Icon" className="search-icon" />
			{/* <input type="search" name="search" id="search" placeholder="Search..." className="search-input" /> */}
		</div>
	);
};

export default Search;
