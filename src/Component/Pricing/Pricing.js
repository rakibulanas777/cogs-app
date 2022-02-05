import React from "react";
import Pricing from "../Home/Pricing/Pricing";
import CustomArrows from "../Home/Slider/Slider";
import Navbar from "../Shared/Navbar/Navbar";
import Shared from "../Shared/Shared";
import Accordion from "./Accordion/Accordion";
import Footer from "./Footer";
import "./Pricing.css";
import Subscribe from "./Subscribe";
const PricingPage = () => {
	return (
		<div className="pricing">
			<Navbar />
			<Shared />
			<div className="container">
				<div className="col-11 mx-auto">
					<div className="pricing-header-title mt-5 mb-2 text-center">
						Choose a <span> Plan</span> That’s Right <br /> for You.
					</div>
					<div className="d-flex justify-content-center mb-3">
						<div className="monthly me-3">Monthly</div>
						<div className="form-check form-switch">
							<input
								className="form-check-input"
								type="checkbox"
								id="flexSwitchCheckChecked"
							/>
						</div>
						<div className="monthly ms-3">Annually</div>
					</div>
				</div>
			</div>
			<Pricing />
			<Pricing />
			<Accordion />
			<CustomArrows />
			<Subscribe />
			<Footer />
		</div>
	);
};

export default PricingPage;
