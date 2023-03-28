import React from "react";
import "./InputField.scss";

const InputField = ({ label, ...otherProps }) => {
	console.log(otherProps);
	return (
		<div className="input-container">
			<input {...otherProps} className="input-field" />
			<label htmlFor="email" className={`${otherProps.value.length ? "shrink" : ""} input-label`}>
				{label}
			</label>
		</div>
	);
};

export default InputField;
