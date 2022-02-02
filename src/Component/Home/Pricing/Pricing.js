import React from "react";
import tick from "../../Images/Vector (3).png";
import "./Pricing.css";
const Pricing = () => {
	return (
		<div className="pricing p-4 mt-5 mb-5">
			<div className="container">
				<div className="pricing-title text-center mt-5 mb-3">
					68% of small businesses don’t have a structured or documented <br />
					conversion rate optimization (CRO) strategy.
				</div>
				<div className="pricing-deatails text-center mb-4">
					We plan to change that with our product.
				</div>
				<div className="pricing-grid">
					{/* price 1 */}
					<div className="pricing-grid-item p-3">
						<div className="d-flex flex-column justify-content-between">
							<div className="mb-5">
								<div className="title-part border-bottom mb-3 p-3">
									<div className="price mb-3">
										<span>$999</span>/month
									</div>
									<div className="price-deatils">Amazon Standard</div>
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
									<div className="tool-tick-text mx-3">
										Increase in revenue/sales
									</div>
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
									<div className="tool-tick-text mx-3">
										Increase in revenue/sales
									</div>
								</div>
							</div>
							<div className="button-part mb-5 mt-3 text-center">
								<button className="left-btn w-100 mx-3">Request a Demo</button>
							</div>
						</div>
					</div>
					{/* price 1 */}
					<div className="pricing-grid-item p-3">
						<div className="d-flex flex-column justify-content-between">
							<div className="mb-5">
								<div className="title-part border-bottom mb-3 p-3">
									<div className="price mb-3">
										<span>$999</span>/month
									</div>
									<div className="price-deatils">Amazon Standard</div>
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
									<div className="tool-tick-text mx-3">
										Increase in revenue/sales
									</div>
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
									<div className="tool-tick-text mx-3">
										Increase in revenue/sales
									</div>
								</div>
							</div>
							<div className="button-part mb-5 mt-3 text-center">
								<button className="left-btn w-100 mx-3">Request a Demo</button>
							</div>
						</div>
					</div>
					{/* price 1 */}
					<div className="pricing-grid-item p-3">
						<div className="d-flex flex-column justify-content-between">
							<div className="mb-5">
								<div className="title-part border-bottom mb-3 p-3">
									<div className="price mb-3">
										<span>$999</span>/month
									</div>
									<div className="price-deatils">Amazon Standard</div>
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
									<div className="tool-tick-text mx-3">
										Increase in revenue/sales
									</div>
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
									<div className="tool-tick-text mx-3">
										Increase in revenue/sales
									</div>
								</div>
							</div>
							<div className="button-part mb-5 mt-3 text-center">
								<button className="left-btn w-100 mx-3">Request a Demo</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
