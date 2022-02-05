import React from "react";
import "./Tool.css";
import tick from "../../Images/Vector (3).png";
import right from "../../Images/Group 237327.png";
const Tool = () => {
	return (
		<div className="tool mt-5 mb-5">
			<div className="container">
				<div className="row mt-5 mb-5">
					<div className="col-11 col-lg-5 mx-auto">
						<div className="tool-title mt-5 mb-3">
							The Best ETL Tool for your <br /> <span>Tech stack</span>
						</div>
						<div className="d-flex tool-bottom mt-3">
							<div className="img-tick">
								<img src={tick} width="20px" alt="" />
							</div>
							<div className="tool-tick-text mx-3">
								Increase in revenue/sales
							</div>
						</div>
						<div className="d-flex tool-bottom mt-3">
							<div className="img-tick">
								<img src={tick} width="20px" alt="" />
							</div>
							<div className="tool-tick-text mx-3">Squeeze more profits</div>
						</div>
						<div className="d-flex tool-bottom mt-3">
							<div className="img-tick">
								<img src={tick} width="20px" alt="" />
							</div>
							<div className="tool-tick-text mx-3">Time save percentage</div>
						</div>
						<div className="d-flex tool-bottom mt-3">
							<div className="img-tick">
								<img src={tick} width="20px" alt="" />
							</div>
							<div className="tool-tick-text mx-3">Overall Efficiency</div>
						</div>
					</div>
					<div className="col-11 order-first order-lg-last col-lg-7 mx-auto">
						<img src={right} alt="" className="img-fluid w-100" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tool;
