import React from "react";
import time from "../Assets/Svgs/Save time.svg";
import analize from "../Assets/Svgs/Online Availability.svg";
import "./Visual.css";
const Visual = () => {
	return (
		<div className="container mt-5 mb-5">
			<div className="visual-title text-center mt-5 mb-5">
				How Visual COGS Works
			</div>
			<div className="visual-grid">
				<div className="visual-grid-box p-3">
					<div className="img-visual text-center mx-auto">
						<img
							src={time}
							className="img-fluid text-center visual-img"
							alt=""
						/>
					</div>
					<div className="exact mt-3 mb-3 text-center">Extract</div>
					<div className="save-time text-center mb-3">Save Time</div>
					<div className="save-deatils text-center">
						We obtain market data from Amazon, Wayfair, Walmart, Costco, and
						other e-commerce websites
					</div>
				</div>
				<div className="visual-grid-box p-3">
					<div className="img-visual text-center mx-auto">
						<img
							src={time}
							className="img-fluid text-center visual-img"
							alt=""
						/>
					</div>
					<div className="exact mt-3 mb-3 text-center">Analyze</div>
					<div className="save-time text-center mb-3">Improve Efficiency</div>
					<div className="save-deatils text-center">
						gathering billions of marketing insights creating valuable
						information and customizable data
					</div>
				</div>
				<div className="visual-grid-box p-3">
					<div className="img-visual text-center mx-auto">
						<img
							src={time}
							className="img-fluid text-center visual-img"
							alt=""
						/>
					</div>
					<div className="exact mt-3 mb-3 text-center">Automate</div>
					<div className="save-time text-center mb-3">
						Make strategic decisions
					</div>
					<div className="save-deatils text-center">
						We use AI; pipeline automation Connect gathered data Dynamic
						optimization
					</div>
				</div>
			</div>
			{/* button part  */}
			<div className="button-part mt-5 mb-5 text-center">
				<button className="left-btn mx-3">Get Started</button>
			</div>
		</div>
	);
};

export default Visual;
