import React from "react";

//Internal Imports
import ImageCard from "../ImageCard/ImageCard";
import MainBanner from "../../assets/Category/Banner.webp";

//Styling Sheets imports
import "./ImageGallery.scss";

const ImageGallery = ({ imageList }) => {
	return (
		<div className="image-gallery-container">
			<div className="main-banner-container">
				<img src={MainBanner} alt="Main Banner" />
			</div>
			<div className="sub-banner-container">
				{imageList.map((element) => {
					return <ImageCard key={element.id} cardType="default" text={element.text} image={element.imageUrl} isButton={false} />;
				})}
			</div>
		</div>
	);
};

export default ImageGallery;
