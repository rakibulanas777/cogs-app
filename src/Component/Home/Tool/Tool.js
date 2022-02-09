import React from "react";
import "./Tool.css";
import tick from "../../Images/Vector (3).png";
import right from "../../Images/Group 237327.png";
const Tool = () => {
	return (
		<div className="tool mt-5 mb-5">
			<div className="container">
				<div className="tool-title text-center mt-5 mb-3 d-lg-none">
					The Best ETL Tool for your <span>Tech stack</span>
				</div>
				<div className="row mt-5 mb-5">
					<div className="col-11 col-lg-5 mx-auto" data-aos="fade-up">
						<div className="tool-title mt-lg-5 mt-0 mb-3 d-none d-lg-block">
							The Best ETL Tool for your <br /> <span>Tech stack</span>
						</div>
						<div className="bottom-grid-ETL">
							<div className="d-flex tool-bottom mt-4">
								<div className="img-tick">
									<img src={tick} width="20px" alt="" />
								</div>
								<div className="tool-tick-text mx-3">
									Increase in revenue/sales
								</div>
							</div>
							<div className="d-flex tool-bottom mt-4">
								<div className="img-tick">
									<img src={tick} width="20px" alt="" />
								</div>
								<div className="tool-tick-text mx-3">Squeeze more profits</div>
							</div>
							<div className="d-flex tool-bottom mt-4">
								<div className="img-tick">
									<img src={tick} width="20px" alt="" />
								</div>
								<div className="tool-tick-text mx-3">Time save percentage</div>
							</div>
							<div className="d-flex tool-bottom mt-4">
								<div className="img-tick">
									<img src={tick} width="20px" alt="" />
								</div>
								<div className="tool-tick-text mx-3">Overall Efficiency</div>
							</div>
						</div>
					</div>
					<div
						className="col-11 order-first order-lg-last col-lg-7 mx-auto"
						data-aos="fade-down"
					>
						<img src={right} alt="" className="img-fluid w-100" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tool;
