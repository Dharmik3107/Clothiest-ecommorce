import React, { useState } from "react";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import "./RegisterForm.scss";
import { Link } from "react-router-dom";

const defaultValue = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};
const RegisterForm = () => {
	const [formValue, setFormValues] = useState(defaultValue);
	const { displayName, email, password, confirmPassword } = defaultValue;
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = () => {};
	return (
		<div className="registerform-container">
			<h1 className="register-form-heading">Register</h1>
			<form onSubmit={handleSubmit} className="form-container-register">
				<InputField type="text" name="username" id="username" label="Display Name" required={true} value={displayName} onChange={handleChange} />
				<InputField type="email" name="email" id="email" label="Email Address" required={true} value={displayName} onChange={handleChange} />
				<InputField type="password" name="password" id="password" label="Password" required={true} value={displayName} onChange={handleChange} />
				<InputField type="password" name="password" id="password" label="Confirm Password" required={true} value={displayName} onChange={handleChange} />
				<div className="divider"></div>
				<Button text="Register" buttonType="default" type="submit" />
				<div className="horizontal-line"></div>
				<Button text="Register with Google" buttonType="google" type="button" />
			</form>
			<div className="login-redirect-container">
				<p className="login-redirect-text">
					Already Registered? <Link to="/login">Login here</Link>
				</p>
			</div>
		</div>
	);
};

export default RegisterForm;
