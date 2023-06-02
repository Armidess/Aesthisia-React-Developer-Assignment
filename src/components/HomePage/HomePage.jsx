import React from "react";
import "./HomePage.css";

const HomePage = (props) => {
	const signoutHandler = () => {
		props.setUser(false);
	};
	return (
		<div class="main body">
			<div class="overlay"></div>
			<div class="navbar">
				<div class="logo">Armides Gaming</div>
				<ul>
					<li>
						<a href="#">HOME</a>
					</li>
					<li>
						<a href="#">VIDEOS</a>
					</li>
					<li>
						<a href="#">BLOG</a>
					</li>
					<li>
						<a href="#">PORTFOLIO</a>
					</li>
					<li>
						<a href="#">ABOUT US</a>
					</li>
					<li>
						<a href="#">CONTACT US</a>
					</li>
				</ul>
			</div>
			<div class="heading">
				<h1 class="head">
					WELCOME TO OUR <span>WEBSITE</span>
				</h1>
				<h3 class="sub">#Just One More Game</h3>
				<div class="btns">
					<a class="btn1" href="#" onClick={signoutHandler}>
						Sign Out
					</a>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
