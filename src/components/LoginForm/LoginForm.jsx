import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import { popupSignin, createUserDocument, manualSignin } from "../../utils/firebase/firebase";
import "./LoginForm.scss";

//form field default values
const defaultFormValue = {
	email: "",
	password: "",
};

const LoginForm = () => {
	const [formValues, setFormValues] = useState(defaultFormValue);
	const { email, password } = formValues;

	//function to handle change in every input field
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	};

	//function reset all input field
	const resetFormField = () => {
		setFormValues(defaultValue);
	};

	//function to sign in with google
	const signInWithGoogle = async () => {
		const { user } = await popupSignin();
		await createUserDocument(user);
	};

	//function to handle form for manaual signin
	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await manualSignin(email, password);
			resetFormField();
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("Incorrect Password");
					break;
				case "auth/user-not-found":
					alert("Emaid is not registered yet.");
					break;
				default:
					console.log(error);
			}
		}
	};

	return (
		<div className="login-form-container">
			<h1 className="form-heading">Login</h1>
			<form onSubmit={handleSubmit} className="fomr-container">
				<InputField type="email" name="email" id="email" label="Email Address" required={true} value={email} onChange={handleChange} />
				<InputField type="password" name="password" id="password" label="Password" required={true} value={password} onChange={handleChange} />
				<div className="divider"></div>
				<Button text="Sign in" buttonType="default" type="submit" />
				<div className="horizontal-line"></div>
				<Button text="Signin with Google" buttonType="google" type="button" onClick={signInWithGoogle} />
			</form>
			<div className="register-redirect-container">
				<p className="register-redirect-text">
					Haven't registered yet? <Link to="/register">Register here</Link>
				</p>
			</div>
		</div>
	);
};

export default LoginForm;
