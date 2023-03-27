import React from "react";
import ImageSliderComponent from "../../components/ImageSlider/ImageSlider";
import "./Home.scss";
import { imageArrayWomen, imageArrayMen } from "./../../assets/index";

const Home = () => {
	return (
		<div className="home-container">
			<ImageSliderComponent imageArray={imageArrayWomen} />
		</div>
	);
};

export default Home;
