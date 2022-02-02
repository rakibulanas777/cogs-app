import React from "react";
import tick from "../Images/Group (2).png";
import "./monitoring.css";
const Monitoring = () => {
	return (
		<div className="monitoring p-4">
			<div className="container">
				<div className="monitoring-grid mt-5 mb-5">
					<div className="inventory p-4 ">
						<div className="d-flex flex-column">
							<div className="tick mb-3">
								<img src={tick} width="30px" alt="" />
							</div>
							<div className="inventory-title mb-3">
								Simplifying Inventory Management
							</div>
							<div className="inventory-deatails mb-3 pe-3">
								Tracks planning, availability, top-performing products, and
								revenue generated.
							</div>
						</div>
					</div>
					{/* 2nd one */}
					<div className="inventory p-4 ">
						<div className="d-flex flex-column">
							<div className="tick mb-3">
								<img src={tick} width="30px" alt="" />
							</div>
							<div className="inventory-title mb-3">
								Simplifying Inventory Management
							</div>
							<div className="inventory-deatails mb-3 pe-3">
								Tracks planning, availability, top-performing products, and
								revenue generated.
							</div>
						</div>
					</div>
					{/*     Competitor Survey*/}
					<div className="survey p-4 ">
						<div className="d-flex flex-column">
							<div className="tick mb-3">
								<img src={tick} width="30px" alt="" />
							</div>
							<div className="inventory-title mb-3">Competitor Survey</div>
							<div className="inventory-deatails mb-3 pe-3">
								Tracks planning, availability, top-performing products, and
								revenue generated.
							</div>
						</div>
					</div>
					{/* 2nd one */}
					<div className="inventory p-4 ">
						<div className="d-flex flex-column">
							<div className="tick mb-3">
								<img src={tick} width="30px" alt="" />
							</div>
							<div className="inventory-title mb-3">
								Simplifying Inventory Management
							</div>
							<div className="inventory-deatails mb-3 pe-3">
								Tracks planning, availability, top-performing products, and
								revenue generated.
							</div>
						</div>
					</div>
					{/* 2nd one */}
					<div className="inventory p-4 ">
						<div className="d-flex flex-column">
							<div className="tick mb-3">
								<img src={tick} width="30px" alt="" />
							</div>
							<div className="inventory-title mb-3">
								Simplifying Inventory Management
							</div>
							<div className="inventory-deatails mb-3 pe-3">
								Tracks planning, availability, top-performing products, and
								revenue generated.
							</div>
						</div>
					</div>
					{/*     Competitor Survey*/}
					<div className="survey p-4 ">
						<div className="d-flex flex-column">
							<div className="tick mb-3">
								<img src={tick} width="30px" alt="" />
							</div>
							<div className="inventory-title mb-3">Competitor Survey</div>
							<div className="inventory-deatails mb-3 pe-3">
								Tracks planning, availability, top-performing products, and
								revenue generated.
							</div>
						</div>
					</div>
				</div>
				{/* button  */}
				<div className="button-part mb-5 mt-5 text-center">
					<button className="right-btn mt-5">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Monitoring;
