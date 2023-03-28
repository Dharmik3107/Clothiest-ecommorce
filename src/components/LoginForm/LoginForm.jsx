import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import "./LoginForm.scss";

const defaultFormValue = {
	email: "",
	password: "",
};
const LoginForm = () => {
	const [formValues, setFormValues] = useState(defaultFormValue);
	const { email, password } = formValues;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = () => {};

	return (
		<div className="login-form-container">
			<h1 className="form-heading">Login</h1>
			<form onSubmit={handleSubmit} className="fomr-container">
				<InputField type="email" name="email" id="email" label="Email Address" required={true} value={email} onChange={handleChange} />
				<InputField type="password" name="password" id="password" label="Password" required={true} value={password} onChange={handleChange} />
				<div className="divider"></div>
				<Button text="Sign in" buttonType="default" type="submit" />
				<div className="horizontal-line"></div>
				<Button text="Signin with Google" buttonType="google" type="button" />
			</form>
			<div className="register-redirect-container">
				<p className="register-redirect-text">
					Haven't registered yet? <Link to="register">Register here</Link>
				</p>
			</div>
		</div>
	);
};

export default LoginForm;
