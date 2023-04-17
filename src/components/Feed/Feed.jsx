import React, { useMemo } from "react";

//Internal Imports
import ImageCard from "../ImageCard/ImageCard";
import Button from "../Button/Button";

//Styling Sheets Imports
import "./Feed.scss";

const Feed = ({ feedText, categories }) => {
	const memoizedImageArray = useMemo(() => {
		return categories.map((element) => <ImageCard key={element.id} cardType="feed" text={element.categoryTitle} image={element.imageURL} isButton={false} />);
	}, [categories]);

	return (
		<div className="feed-container">
			<h1 className="feed-heading">{feedText}</h1>
			<div className="image-slider-container">{memoizedImageArray}</div>
			<Button text="Shop Now" buttonType="inverted" />
		</div>
	);
};

export default Feed;
