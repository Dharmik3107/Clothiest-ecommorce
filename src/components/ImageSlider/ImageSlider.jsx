import React, { useState, useRef, useEffect } from "react";
import "./ImageSlider.scss";

const ImageSliderComponent = (props) => {
	const [index, setIndex] = useState(0);
	const timer = useRef(null);

	const resetTimer = () => {
		if (timer.current) {
			clearTimeout(timer.current);
		}
	};

	useEffect(() => {
		console.log("calling useEffect");
		resetTimer();
		timer.current = setTimeout(() => setIndex((prev) => (prev === props.imageArray.length - 1 ? 0 : prev + 1)), 2500);

		return () => {
			resetTimer();
		};
	}, [index]);

	const handleDotClick = (number) => {
		setIndex(number);
	};

	return (
		<div className="image-slider-container">
			<div className="sliding-container" style={{ transform: `translate3d(${-index * 100}%,0,0)` }}>
				{props.imageArray.map((element, index) => {
					return <img key={index} src={element} alt={`sliding-image-${index}`} className="slide" />;
				})}
			</div>

			<div className="slideshow-buttons">
				{props.imageArray.map((_, idx) => {
					return <div key={idx} className={`sliding-dots ${index === idx ? "current" : ""}`} onClick={() => handleDotClick(idx)}></div>;
				})}
			</div>
		</div>
	);
};

export default ImageSliderComponent;
