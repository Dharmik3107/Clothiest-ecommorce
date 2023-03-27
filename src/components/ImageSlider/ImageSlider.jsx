import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import "./ImageSlider.scss";

const ImageSliderComponent = ({ imageArray }) => {
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
		timer.current = setTimeout(() => setIndex((prev) => (prev === imageArray.length - 1 ? 0 : prev + 1)), 2500);

		return () => {
			resetTimer();
		};
	}, [index]);

	//Dot Click Handler
	const handleDotClick = useCallback((number) => {
		setIndex(number);
	}, []);

	//memoized functions prevent unneccesory re-renders
	const memoizedImageArray = useMemo(() => {
		return imageArray.map((element, idx) => <img key={idx} src={element} alt={`sliding-image-${idx}`} className="slide" />);
	}, [imageArray]);

	const memoizedDotsArray = useMemo(() => {
		return imageArray.map((_, idx) => <div key={idx} className={`sliding-dots ${index === idx ? "current" : ""}`} onClick={() => handleDotClick(idx)}></div>);
	}, [imageArray, handleDotClick, index]);

	return (
		<div className="image-slider-container">
			<div className="sliding-container" style={{ transform: `translate3d(${-index * 100}%,0,0)` }}>
				{memoizedImageArray}
			</div>

			<div className="slideshow-buttons">{memoizedDotsArray}</div>
		</div>
	);
};

export default ImageSliderComponent;
