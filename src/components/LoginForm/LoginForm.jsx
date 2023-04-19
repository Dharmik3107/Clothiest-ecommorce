import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//Internal Imports - Components
import Button from "../Button/Button";
import InputField from "../InputField/InputField";

//Internal Imports - Third Party Lib- Firebase
import { popupSignin, manualSignin } from "../../utils/firebase/firebase";

//Internal Imports - Context
import { UserContext } from "../../contexts/user";

//Styling Sheets Imports
import "./LoginForm.scss";

//Form field default values
const defaultFormValue = {
	email: "",
	password: "",
};

const LoginForm = () => {
	const [formValues, setFormValues] = useState(defaultFormValue);
	const { email, password } = formValues;
	const navigate = useNavigate();
	const { currentUser } = useContext(UserContext);

	//function to handle change in every input field
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	};

	//function reset all input field
	const resetFormField = () => {
		setFormValues(defaultFormValue);
	};

	//function to sign in with google
	const signInWithGoogle = async () => {
		await popupSignin();
		if (currentUser) navigate("/");
	};

	useEffect(() => {
		if (currentUser) {
			navigate("/");
		}
	}, [currentUser]);
	//function to handle form for manaual signin
	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await manualSignin(email, password);
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
				<Link to={currentUser ? "/" : ""}>
					<Button text="Signin with Google" buttonType="google" type="button" onClick={signInWithGoogle} />
				</Link>
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
