import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

//Internal Imports - Components
import Button from "../Button/Button";
import InputField from "../InputField/InputField";

//Internal Imports - Third Party Lib - Firebase
import { createManualSignupUser, createUserDocument } from "../../utils/firebase/firebase";

//Internal Import - Contexts
import { UserContext } from "../../contexts/user";

//Styling Sheets Imports
import "./RegisterForm.scss";

//default values for input fields
const defaultValue = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const RegisterForm = () => {
	const [formValue, setFormValues] = useState(defaultValue);
	const { displayName, email, password, confirmPassword } = formValue;
	const navigate = useNavigate();

	//state handling
	const { setCurrentUser } = useContext(UserContext);

	//function to handle event of input field based on name
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValue, [name]: value });
	};

	//function to reset form input field
	const resetFormField = () => {
		setFormValues(defaultValue);
	};

	//function to pass values typed in form to firebase store to create user doc
	const handleSubmit = async (event) => {
		event.preventDefault();

		//checking both password is same or not
		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}

		try {
			//passing data to manual sign up function and creating document based on the response
			const { user } = await createManualSignupUser(email, password);
			setCurrentUser(user);
			await createUserDocument(user, { displayName });

			//if we get user object in response then redirect to login page
			if (user) {
				navigate("/login");
			}
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
				<InputField type="password" name="confirmPassword" id="confirmPassword" label="Confirm Password" required={true} value={confirmPassword} onChange={handleChange} />
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
