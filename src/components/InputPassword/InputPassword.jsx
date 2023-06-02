import React from "react";
import openEye from "../../assests/openEye.svg";
import closeEye from "../../assests/closed_eye.svg";
import welcome from "../../assests/welcome.png";
import "./InputPassword.css";

const InputPassword = () => {
	const [password, setPasswordValue] = React.useState("password");

	const toggle = (e) => {
		e.preventDefault();
		if (password === "password") {
			setPasswordValue("text");
			return;
		}
		setPasswordValue("password");
	};

	const loginHandler = (e) => {
		e.preventDefault();
	};
	return (
		<div className="login-page-outer-div">
			<img src={welcome} alt="" />
			<form className="form">
				<input type="email" placeholder="Enter your email" className="input" />
				<div className="password-wrapper">
					<input
						type="password"
						placeholder="Enter your password"
						className="input password-input"
						id="password"
					/>
					<button className="eye" onClick={toggle}>
						{password === "password" ? (
							<img src={closeEye} alt="Close Eye" />
						) : (
							<img src={openEye} alt="Open Eye" />
						)}
					</button>
				</div>
				<p id="Forgot-Password">Forgot Password?</p>
				<button type="submit" className="button_login" onClick={loginHandler}>
					<b>Log In</b>
				</button>
			</form>
			<p className="account">
				<b>Don't have an account yet?</b>
				<span className="signup">
					<b>Sign Up</b>
				</span>
			</p>
		</div>
	);
};

export default InputPassword;
