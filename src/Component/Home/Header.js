import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Shared from "../Shared/Shared";
import "./Header.css";
import Main from "./Main";
import Monitoring from "./Monitoring";
import Tool from "./Tool/Tool";
import Visual from "./Visual";
import sheild from "../Images/teenyicons_shield-tick-solid.png";
import Footer from "./Footer/Footer";
import CustomArrows from "./Slider/Slider";
import PreviousNextMethods from "./Slider/Catosoul";
import Pricing from "./Pricing/Pricing";

const Header = () => {
	return (
		<div className="home">
			<Navbar />
			<div className="container mb-5">
				<Shared />
				<div className="header-home col-10 col-lg-12 mx-auto">
					<div className="text-center header-text mt-5 mb-3">
						Empowering Businesses with Maximized, 360-degree MarketPlace
						Optimization
					</div>
					<div className="text-center header-subtitle mb-3">
						Sales. Inventory. Buy Box. Reviews. Competitors. Traffic.
					</div>
					{/* button part  */}
					<div className="button-part mb-5 text-center">
						<button className="left-btn mx-3">Request a Demo</button>
						<button className="right-btn mx-3">Explore</button>
					</div>
				</div>
				<div className="header-home-video mt-5">
					<div className="play-center">
						<div className="play-circle">
							<i class="fas fa-play"></i>
						</div>
					</div>
				</div>
			</div>
			<Main />
			<Visual />
			<Monitoring />
			<Tool />
			<Pricing />
			<CustomArrows />
			<PreviousNextMethods />
			<div className="design-export mb-5 p-4">
				<div className="container mt-5 mb-5">
					<div className="col-10 mx-auto">
						<div className="img-sheild text-center mt-3 mb-3">
							<img
								src={sheild}
								alt=""
								width="50px"
								className="sheild text-center"
							/>
						</div>
						<div className="design-export-title text-center mb-3">
							Designed by E-commerce Experts
						</div>
						<div className="design-export-details text-center mb-3">
							Visual COGS is the brainwork of a team of experts who are here to
							help you grow your sales on various e-commerce platforms. We’re
							here to help you gain valuable insights through our AI-driven
							technology and get all your queries resolved.
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Header;
