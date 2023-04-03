import React, { useEffect, useContext } from "react";
import { productContext } from "../../contexts/product";

//id
//brand name
// products name
// price
// size

const Category = () => {
	const { productMapMen, productMapWomen } = useContext(productContext);
	return (
		<div>
			<h1>In the Category</h1>
		</div>
	);
};

export default Category;
