import React from "react";
import tick from "../Images/Group (2).png";
import "./monitoring.css";
const Monitoring = () => {
	return (
		<div className="monitoring p-4">
			<div className="container">
				<div className="monitoring-grid mt-5 mb-5">
					<div className="inventory p-4 " data-aos="zoom-in">
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
					<div className="inventory p-4 " data-aos="zoom-in">
						<div className="d-flex flex-column">
							<div className="tick mb-3">
								<img src={tick} width="30px" alt="" />
							</div>
							<div className="inventory-title mb-3">
								Monitoring Profile & Accounting
							</div>
							<div className="inventory-deatails mb-3 pe-3">
								Analyze market shares, drive conversions and discovery, track
								revenue, ROI, and growth
							</div>
						</div>
					</div>
					{/*     Competitor Survey*/}
					<div className="survey p-4 " data-aos="zoom-in">
						<div className="d-flex flex-column">
							<div className="tick mb-3">
								<img src={tick} width="30px" alt="" />
							</div>
							<div className="inventory-title mb-3">Competitor Survey</div>
							<div className="inventory-deatails mb-3 pe-3">
								Comprehensive competitor survey: Understand your competition and
								do better than them
							</div>
						</div>
					</div>
					{/* Data Analytics*/}
					<div className="inventory p-4 " data-aos="zoom-in">
						<div className="d-flex flex-column">
							<div className="tick mb-3">
								<img src={tick} width="30px" alt="" />
							</div>
							<div className="inventory-title mb-3">Data Analytics</div>
							<div className="inventory-deatails mb-3 pe-3">
								Identify KPIs, advanced dashboards, operation metrics; Smart,
								robust, flexible data pipelines.
							</div>
						</div>
					</div>
					{/* BuyBox Analytics*/}
					<div className="inventory p-4 " data-aos="zoom-in">
						<div className="d-flex flex-column">
							<div className="tick mb-3">
								<img src={tick} width="30px" alt="" />
							</div>
							<div className="inventory-title mb-3">BuyBox Analytics</div>
							<div className="inventory-deatails mb-3 pe-3">
								Win more buy boxes with less attention (stat)
							</div>
						</div>
					</div>
					{/*Review Management*/}
					<div className="survey p-4 " data-aos="zoom-in">
						<div className="d-flex flex-column">
							<div className="tick mb-3">
								<img src={tick} width="30px" alt="" />
							</div>
							<div className="inventory-title mb-3">Review Management</div>
							<div className="inventory-deatails mb-3 pe-3">
								Increase customer engagement; customer success analysis
							</div>
						</div>
					</div>
				</div>
				{/* button  */}
				<div className="button-part mb-5 mt-5 text-center">
					<button className="right-btn mt-5" data-aos="fade-up">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Monitoring;
