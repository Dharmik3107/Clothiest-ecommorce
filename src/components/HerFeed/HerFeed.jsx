import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import "./HerFeed.scss";
import womenCategories from "../../assets/Category/Women/index";
import ImageCard from "../ImageCard/ImageCard";
import $ from "jquery";

const HerFeed = () => {
	const [index, setIndex] = useState(0);
	const timer = useRef(null);

	//function to clear timeout
	const resetTimer = () => {
		if (timer.current) {
			clearTimeout(timer.current);
		}
	};

	//Timeout side effect for sliding an image
	useEffect(() => {
		resetTimer();
		timer.current = setTimeout(() => setIndex((prev) => (prev === womenCategories.length - 1 ? 0 : prev + 1)), 2500);

		return () => {
			resetTimer();
		};
	}, [index]);

	//Dot Click Handler
	const handleDotClick = useCallback((number) => {
		setIndex(number);
	}, []);

	const memoizedImageArray = useMemo(() => {
		return womenCategories.map((element) => <ImageCard key={element.id} cardType="feed" text={element.categoryTitle} image={element.imageURL} isButton={false} />);
	}, [womenCategories]);

	const memoizedDotsArray = useMemo(() => {
		return womenCategories.map((element, idx) => <div key={element.id} className={`sliding-dots ${idx === index ? "current" : ""}`} onClick={() => handleDotClick(index)}></div>);
	});

	return (
		<div className="her-feed-container">
			<div className="carousel-container">
				<div className="image-slider-container">{memoizedImageArray}</div>
				<button className="prev">&#10094;</button>
				<button className="next">&#10095;</button>
				<div className="dots-container">{memoizedDotsArray}</div>
			</div>
			<div className="button-container"></div>
		</div>
	);
};

export default HerFeed;
