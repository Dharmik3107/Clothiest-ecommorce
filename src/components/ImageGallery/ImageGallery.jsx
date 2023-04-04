import React from "react";
import MainBanner from "../../assets/Category/Banner.webp";
import Traditionals from "../../assets/Category/Women/Traditionals.webp";
import Dress from "../../assets/Category/Women/Dress.webp";
import Jeans from "../../assets/Category/Men/Bottoms.webp";
import TopWear from "../../assets/Category/Men/Top Wear.webp";
import "./ImageGallery.scss";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = () => {
	return (
		<div className="image-gallery-container">
			<div className="main-banner-container">
				<img src={MainBanner} alt="Main Banner" />
			</div>
			<div className="sub-banner-container">
				<ImageCard cardType="default" text="Traditionals" image={Traditionals} isButton={false} />
				<ImageCard cardType="default" text="Dresses" image={Dress} isButton={false} />
				<ImageCard cardType="default" text="Jeans" image={Jeans} isButton={false} />
				<ImageCard cardType="default" text="Top Wear" image={TopWear} isButton={false} />
			</div>
		</div>
	);
};

export default ImageGallery;
