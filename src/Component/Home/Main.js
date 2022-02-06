import React from "react";
import bottom from "../Assets/Images/Rectangle 13.png";
import agility from "../Assets/Images/iteration 1.png";
import user from "../Images/user 1.svg";
import coin from "../Images/coins 1.svg";
import rocket from "../Images/rocket (1) 1.svg";
import "./main.css";
const Main = () => {
	return (
		<div className="home-main p-5">
			<div className="container mt-3 mb-3">
				<div className="main-title  text-center">
					Delivering Comprehensive Insights for
				</div>
				<div className="text-center mb-5">
					<img src={bottom} alt="" width="130px" className="img-fluid" />
				</div>
				<div className="main-grid mb-3">
					<div className="main-grid-box p-5" data-aos="zoom-in">
						<div className="text-center mb-2">
							<img src={agility} alt="" className="img-fluid" />
						</div>
						<div className="main-text-grid text-center">Business Agility</div>
					</div>
					<div className="main-grid-box p-5" data-aos="zoom-in">
						<div className="text-center mb-2">
							<img src={user} alt="" className="img-fluid" />
						</div>
						<div className="main-text-grid text-center">Customer Success</div>
					</div>
					<div className="main-grid-box p-5" data-aos="zoom-in">
						<div className="text-center mb-2">
							<img src={coin} alt="" className="img-fluid" />
						</div>
						<div className="main-text-grid text-center">Maximize Sales</div>
					</div>
					<div className="main-grid-box p-5" data-aos="zoom-in">
						<div className="text-center mb-2">
							<img src={rocket} alt="" className="img-fluid" />
						</div>
						<div className="main-text-grid text-center">Boost ROI</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
