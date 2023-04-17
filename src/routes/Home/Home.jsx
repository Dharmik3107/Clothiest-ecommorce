import React from "react";

//Internal Imports Components
import Landing from "../../components/Landing/Landing";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import Feed from "../../components/Feed/Feed";
import StyledCardContainer from "../../components/StyledCardContainer/StyledCardContainer";
import LogosContainer from "../../components/LogosContainer/LogosContainer";
import Footer from "../../components/Footer/Footer";

//Internal Imports - Assets
import menCategories from "../../assets/Category/Men";
import womenCategories from "../../assets/Category/Women";
import { imageGalleryList } from "../../assets/Category/ImageGalleryList";

// Styling Sheets imports
import "./Home.scss";

const Home = () => {
	return (
		<div className="home-container">
			<Landing /> {/* Done */}
			<ImageGallery imageList={imageGalleryList} /> {/* Done */}
			<Feed feedText="Her Feed" categories={womenCategories} /> {/* Done */}
			<StyledCardContainer /> {/* Done */}
			<Feed feedText="His Feed" categories={menCategories} />
			<LogosContainer />
			<Footer />
		</div>
	);
};

export default Home;
