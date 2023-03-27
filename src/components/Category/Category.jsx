import React, { useMemo } from "react";
import "./Category.scss";

const Category = ({ imageArray, title }) => {
	//memoized functions prevent unnecessary re-renders
	const memoizedImageArray = useMemo(() => {
		console.log(imageArray);
		return imageArray ? imageArray.slice(1, 5).map((element) => <img key={element.id} src={element.imageURL} alt={`${element.title}`} className="four-image" />) : [];
	}, [imageArray]);

	return (
		<div className="category-container">
			<h1 className="category-title">{title} Clothes</h1>
			<div className="image-container-category">
				<div className="full-image-container">
					<img key={imageArray?.[0]?.id} src={imageArray?.[0]?.imageURL} alt={`${imageArray?.[0]?.categoryTitle}`} className="full-image" />
				</div>
				<div className="four-image-container">{memoizedImageArray}</div>
			</div>
		</div>
	);
};

export default Category;
