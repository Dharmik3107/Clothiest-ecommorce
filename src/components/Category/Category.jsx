import React, { useMemo } from "react";
import "./Category.scss";
import { Link } from "react-router-dom";

const Category = ({ imageArray, title }) => {
	//memoized functions prevent unnecessary re-renders
	const memoizedImageArray = useMemo(() => {
		console.log(imageArray);
		return imageArray
			? imageArray.slice(0, 5).map((element) => (
					<div className="image-title-container">
						<Link to="shop">
							<img key={element.id} src={element.imageURL} alt={`${element.categoryTitle}`} className="four-image" />
						</Link>
						<h5 className="image-category-title">{element.categoryTitle}</h5>
					</div>
			  ))
			: [];
	}, [imageArray]);

	return (
		<div className="category-container">
			<h1 className="category-title">{title} Clothes</h1>
			<div className="image-container-category">
				<div className="four-image-container">{memoizedImageArray}</div>
			</div>
		</div>
	);
};

export default Category;
