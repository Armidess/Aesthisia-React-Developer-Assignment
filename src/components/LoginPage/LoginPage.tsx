import React, { useState } from "react";
import openEye from "../../assests/openEye.svg";
import closeEye from "../../assests/closed_eye.svg";
import welcome from "../../assests/welcome.png";
import "./LoginPage.css";

const specialChars = [
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"_",
	"-",
	"+",
	"=",
	"[",
	"{",
	"]",
	"}",
	":",
	";",
	"<",
	">",
];

interface FormErrors {
	email: string;
	password: string;
}

const InputPassword: React.FC = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState<FormErrors>({ email: "", password: "" });
	const [passwordVisible, setPasswordVisible] = useState("password");

	const toggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		if (passwordVisible === "password") {
			setPasswordVisible("text");
			return;
		}
		setPasswordVisible("password");
	};

	const validateForm = (): boolean => {
		let isValid = true;
		let emailError = "";
		let passwordError = "";
		let countUpperCase = 0;
		let countLowerCase = 0;
		let countDigit = 0;
		let countSpecialCharacters = 0;
		for (let i = 0; i < password.length; i++) {
			if (specialChars.includes(password[i])) {
				countSpecialCharacters++;
			} else if (!isNaN(password[i] * 1)) {
				countDigit++;
			} else {
				if (password[i] == password[i].toUpperCase()) {
					countUpperCase++;
				}
				if (password[i] == password[i].toLowerCase()) {
					countLowerCase++;
				}
			}
		}

		if (!email) {
			emailError = "Email is required";
			isValid = false;
		}

		if (!password) {
			passwordError = "Password is required";
			isValid = false;
		}
		if (password.length < 8) {
			passwordError = "Minumum Password Length is 8";
			isValid = false;
		}
		if (countLowerCase == 0) {
			passwordError = "Invalid Form, 0 lower case characters in password";
			isValid = false;
		}

		if (countUpperCase == 0) {
			passwordError = "Invalid Form, 0 upper case characters in password";
			isValid = false;
		}

		if (countDigit == 0) {
			passwordError = "Invalid Form, 0 digit characters in password";
			isValid = false;
		}

		if (countSpecialCharacters == 0) {
			passwordError = "Invalid Form, 0 special characters in password";
			isValid = false;
		}

		setErrors({ email: emailError, password: passwordError });
		return isValid;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (validateForm()) {
			props.setUser(true);
		}
	};

	const onLoginHandler = () => {
		props.setIsAccount(false);
	};

	return (
		<div className="login-page-outer-div">
			<div className="div1">
				<img src={welcome} alt="" />
			</div>
			<div className="div2">
				<form className="form" onSubmit={handleSubmit}>
					<input
						type="email"
						placeholder="Enter your email"
						className="input"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					{errors.email && <p className="error">{errors.email}</p>}
					<div className="password-wrapper">
						<input
							type={passwordVisible}
							placeholder="Enter your password"
							className="input password-input"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button className="eye" onClick={toggle}>
							{passwordVisible === "password" ? (
								<img src={closeEye} alt="Close Eye" />
							) : (
								<img src={openEye} alt="Open Eye" />
							)}
						</button>
					</div>
					{errors.password && <p className="error">{errors.password}</p>}
					<p id="Forgot-Password">Forgot Password?</p>
					<button type="submit" className="button_login" onClick={handleSubmit}>
						<b>Log In</b>
					</button>
				</form>
			</div>
			<div className="div3">
				<p className="account">
					<b>Don't have an account yet?</b>
					<span className="signup" onClick={onLoginHandler}>
						<b>Sign Up</b>
					</span>
				</p>
			</div>
		</div>
	);
};

export default InputPassword;
