import React from "react";
import "./Feature.css";
import cloud from "../../Images/cloud 1.svg";
import tick from "../../Images/Icon.png";
const Feature = () => {
	return (
		<div className="product-feature p-4">
			<div className="container">
				<div className="product-feature-title text-center mb-3">
					Our Awesome Features
				</div>
				<div className="product-feature-deatils text-center mb-3">
					With Visual COGS, stay updated, in stock and ahead of your
					competition.
				</div>
				<div className="row">
					<div className="col-11 col-lg-10 mx-auto p-4 shadow feature-box mb-4">
						<div className="d-flex justify-content-between">
							<div className="left-feature">
								<img src={cloud} className="img-fluid" alt="" />
							</div>
							<div>
								<div className="right-part">
									<div className="title-feature">ONLINE AVAILABILITY</div>
									<div className="d-flex tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="tool-tick-text mx-3">
											Get daily email notifications in case your products get
											out of stock.
										</div>
									</div>
									<div className="d-flex tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="tool-tick-text mx-3">
											Keep daily records of in-stock, out stock, online
											availability and much more
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feature;
