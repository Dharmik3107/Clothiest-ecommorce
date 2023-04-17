import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import "./Feed.scss";
// import womenCategories from "../../assets/Category/Women/index";
import ImageCard from "../ImageCard/ImageCard";
import Button from "../Button/Button";

const HerFeed = ({ categories }) => {
	const memoizedImageArray = useMemo(() => {
		return categories.map((element) => <ImageCard key={element.id} cardType="feed" text={element.categoryTitle} image={element.imageURL} isButton={false} />);
	}, [categories]);

	return (
		<div className="feed-container">
			<div className="image-slider-container">{memoizedImageArray}</div>
			<Button text="Shop Now" buttonType="inverted" />
		</div>
	);
};

export default HerFeed;
