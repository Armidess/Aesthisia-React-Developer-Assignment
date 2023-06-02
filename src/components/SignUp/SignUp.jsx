import React, { useState } from "react";
import openEye from "../../assests/openEye.svg";
import closeEye from "../../assests/closed_eye.svg";
import welcome from "../../assests/welcome.png";
import "./SignUp.css";

const SignUp = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordVisible, setPasswordVisible] = useState("password");

	const toggle = (e) => {
		e.preventDefault();
		if (passwordVisible === "password") {
			setPasswordVisible("text");
			return;
		}
		setPasswordVisible("password");
	};

	const signUpHandler = () => {
		props.setIsAccount(true);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		props.setUser(true);
		props.setIsAccount(true);
	};

	return (
		<div className="signup-page-outer-div">
			<div className="header">
				<img src={welcome} alt="" className="logo" />
			</div>
			<div className="content">
				<form className="login-form">
					<input
						type="email"
						placeholder="Enter your email"
						className="input-field"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<div className="password-wrapper">
						<input
							type={passwordVisible}
							placeholder="Enter your password"
							className="input-field password-input"
							id="password"
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
					<p id="forgot-password">Forgot Password?</p>
					<button
						type="submit"
						className="login-button"
						onClick={submitHandler}
					>
						<b>Log In</b>
					</button>
				</form>
			</div>
			<div className="footer">
				<p className="account">
					<b>Already have an account yet?</b>
					<span className="signup" onClick={signUpHandler}>
						<b>Login</b>
					</span>
				</p>
			</div>
		</div>
	);
};

export default SignUp;
