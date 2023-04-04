import React from "react";
import MainBanner from "../../assets/Category/Banner.webp";
import Traditionals from "../../assets/Category/Women/Traditionals.webp";
import Dress from "../../assets/Category/Women/Dress.webp";
import Jeans from "../../assets/Category/Men/Bottoms.webp";
import TopWear from "../../assets/Category/Men/Top Wear.webp";
import "./ImageGallery.scss";

const ImageGallery = () => {
	return (
		<div className="image-gallery-container">
			<div className="main-banner-container">
				<img src={MainBanner} alt="Main Banner" />
			</div>
			<div className="sub-banner-container">
				<div>
					<img src={Traditionals} alt="Traditionals" />
					<p>Traditionals</p>
				</div>
				<div>
					<img src={Dress} alt="Dress" />
					<p>Dresses</p>
				</div>
				<div>
					<img src={Jeans} alt="Jeans" />
					<p>Jeans</p>
				</div>
				<div>
					<img src={TopWear} alt="Top Wear" />
					<p>Top Wear</p>
				</div>
			</div>
		</div>
	);
};

export default ImageGallery;
