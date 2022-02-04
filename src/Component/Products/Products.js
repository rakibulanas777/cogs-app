import React from "react";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Shared from "../Shared/Shared";
import image from "../Images/Group 237286.png";
import tick from "../Images/Vector (3).png";
import "./Products.css";
import Feature from "./Feature/Feature";
import Standout from "./Standout/Standout";
const Products = () => {
	return (
		<div className="products">
			<Navbar />
			<Shared />
			<div className="container">
				<div className="row">
					<div className="col-11 col-lg-6 mx-auto">
						<div className="products-title mb-3">
							One platform for all the information your business needs.
						</div>
						<div className="products-deatils mb-3">
							Sales. Inventory. Buy Box. Reviews. Competitors. Traffic.
						</div>
						<div className="d-flex tool-bottom mt-3">
							<div className="img-tick">
								<img src={tick} width="20px" alt="" />
							</div>
							<div className="tool-tick-text mx-3">Track daily records,</div>
						</div>
						<div className="d-flex tool-bottom mt-3">
							<div className="img-tick">
								<img src={tick} width="20px" alt="" />
							</div>
							<div className="tool-tick-text mx-3">
								Compare weekly performance
							</div>
						</div>
						<div className="d-flex tool-bottom mt-3">
							<div className="img-tick">
								<img src={tick} width="20px" alt="" />
							</div>
							<div className="tool-tick-text mx-3">Set annual goals.</div>
						</div>
					</div>
					<div className="col-11 col-lg-6 mx-auto">
						<img src={image} alt="" className="img-fluid w-100" />
					</div>
				</div>
			</div>
			<Standout />
			<Feature />
			<Footer />
		</div>
	);
};

export default Products;
