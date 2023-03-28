import React, { useState } from "react";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import { createManualSigninUser, createUserDocument } from "../../utils/firebase/firebase";
import { Link } from "react-router-dom";
import "./RegisterForm.scss";

const defaultValue = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const RegisterForm = () => {
	const [formValue, setFormValues] = useState(defaultValue);
	const { displayName, email, password, confirmPassword } = formValue;
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValue, [name]: value });
	};

	const resetFormField = () => {
		setFormValues(defaultValue);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}

		try {
			const { user } = await createManualSigninUser(email, password);

			await createUserDocument(user, { displayName });
			resetFormField();
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Email id is already registered");
			} else {
				console.log("user creation encountered an error", error);
			}
		}
	};
	return (
		<div className="registerform-container">
			<h1 className="register-form-heading">Register</h1>
			<form onSubmit={handleSubmit} className="form-container-register">
				<InputField type="text" name="displayName" id="username" label="Display Name" required={true} value={displayName} onChange={handleChange} />
				<InputField type="email" name="email" id="email" label="Email Address" required={true} value={email} onChange={handleChange} />
				<InputField type="password" name="password" id="password" label="Password" required={true} value={password} onChange={handleChange} />
				<InputField type="password" name="confirmPassword" id="password" label="Confirm Password" required={true} value={confirmPassword} onChange={handleChange} />
				<div className="divider"></div>
				<Button text="Register" buttonType="default" type="submit" />
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
