import React from "react";
import ImageSliderComponent from "../../components/ImageSlider/ImageSlider";
import "./Home.scss";
import { imageArrayWomen, imageArrayMen } from "./../../assets/index";
import Category from "../../components/Category/Category";
import menCategories from "../../assets/Category/Men";
import womenCategories from "../../assets/Category/Women";
import Landing from "../../components/Landing/Landing";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import Feed from "../../components/Feed/Feed";
import StyledCardContainer from "../../components/StyledCardContainer/StyledCardContainer";
import LogosContainer from "../../components/LogosContainer/LogosContainer";
import Footer from "../../components/Footer/Footer";

const Home = () => {
	return (
		<div className="home-container">
			<Landing />
			<ImageGallery />
			<Feed categories={womenCategories} />
			<StyledCardContainer />
			<Feed categories={menCategories} />
			<LogosContainer />
			<Footer />
			{/* <ImageSliderComponent imageArray={imageArrayWomen} />
			<Category imageArray={womenCategories} title={"Her"} />
			<ImageSliderComponent imageArray={imageArrayMen} />
			<Category imageArray={menCategories} title={"Him"} /> */}
		</div>
	);
};

export default Home;
