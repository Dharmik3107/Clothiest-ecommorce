import React from "react";
import { Link } from "react-router-dom";

//Internal Imports
import Left from "../../assets/Icons/Left.svg";
import Right from "../../assets/Icons/Right.svg";

//Styling Sheets Imports
import "./Landing.scss";

const Landing = () => {
	return (
		<div className="landing-container">
			<div className="her-container">
				<h1>SHOP</h1>
				<h2>Her</h2>
				<Link to="/women">
					<button>
						<img src={Left} alt="Left-Arrow" />
					</button>
				</Link>
			</div>
			<div className="him-container">
				<h1>FOR</h1>
				<h2>Him</h2>
				<Link to="/men">
					<button>
						<img src={Right} alt="Right-Arrow" />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Landing;
