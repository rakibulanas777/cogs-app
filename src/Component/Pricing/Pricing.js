import React, { useState } from "react";
import Pricing from "../Home/Pricing/Pricing";
import CustomArrows from "../Home/Slider/Slider";
import Navbar from "../Shared/Navbar/Navbar";
import Shared from "../Shared/Shared";
import Accordion from "./Accordion/Accordion";
import Cpackage from "./Accordion/Cpackage";
import Anual from "./Anual";
import Apackage from "./Apackage";
import CAnual from "./CAnual";
import Footer from "./Footer";
import "./Pricing.css";
import Subscribe from "./Subscribe";
const PricingPage = () => {
	const [checked, setChecked] = useState(true);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};
	console.log(checked);
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
						{checked ? (
							<div className="monthly me-3">Monthly</div>
						) : (
							<div className="monthly-color me-3">Monthly</div>
						)}

						<div className="form-check form-switch">
							<input
								className="form-check-input"
								type="checkbox"
								checked={checked}
								onChange={handleChange}
								id="flexSwitchCheckChecked"
							/>
						</div>
						{checked ? (
							<div className="monthly-color ms-3">Annually</div>
						) : (
							<div className="monthly ms-3">Annually</div>
						)}
					</div>
				</div>
			</div>
			{checked ? <Apackage /> : <Anual />}
			{checked ? <Cpackage /> : <CAnual />}
			<Accordion />
			<CustomArrows />
			<Subscribe />
			<Footer />
		</div>
	);
};

export default PricingPage;
