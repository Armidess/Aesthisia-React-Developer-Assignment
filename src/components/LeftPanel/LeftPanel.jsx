import React from "react";
import "./LeftPanel.css";
import img1 from "../../assests/Frame1.png";
import rectangle from "../../assests/Rectangle 3.png";
import rectangle2 from "../../assests/Rectangle 2.png";
import emoji from "../../assests/Emoji.png";
import web from "../../assests/web.png";
import text from "../../assests/text.png";
import linkdin from "../../assests/linkdin.png";
import fb from "../../assests/fb.png";
import instaa from "../../assests/instaa.png";

const LeftPanel = () => {
	return (
		<div className="left-panel-outer-div">
			<div className="first-div">
				<img src={img1} alt="" className="img1" />
			</div>

			<div className="middle-div">
				<p id="p1">
					100% Uptime <img src={emoji} alt="" id="emoji"></img>
				</p>
				<p>Zero Infrastructure</p>
				<p>Management</p>
				<div className="dots">
					<img src={rectangle} alt="" />
					<img src={rectangle2} alt="" />
					<img src={rectangle2} alt="" />
				</div>
			</div>
			<div className="last-div">
				<div className="left-images">
					<img src={web} alt="" />
					<img src={text} alt="" />
				</div>
				<div className="right-images">
					<img src={linkdin} alt="" />
					<img src={fb} alt="" />
					<img src={instaa} alt="" />
				</div>
			</div>
		</div>
	);
};

export default LeftPanel;
