import React from "react";
import "./Button.scss";

const BUTTON_CLASSES = {
	default: "default-button",
	google: "google-button",
	inverted: "inverted-button",
};

const Button = ({ text, buttonType, ...otherProps }) => {
	return (
		<button {...otherProps} className={`default-button ${BUTTON_CLASSES[buttonType]}`}>
			{text}
		</button>
	);
};

export default Button;
