import React, { useState } from "react";
import tick from "../../Images/Vector (3).png";
import "./Pricing.css";
const Pricing = () => {
	const [color, setColor] = useState(true);
	const [color1, setColor1] = useState(false);
	const [color2, setColor2] = useState(true);
	return (
		<div className="pricing p-4 mt-5 mb-5">
			<div className="container mt-5 mb-5">
				<div className="pricing-title text-center mt-5 mb-3" data-aos="fade-up">
					68% of small businesses don’t have a structured or documented <br />
					conversion rate optimization (CRO) strategy.
				</div>
				<div className="pricing-deatails text-center mb-4" data-aos="fade-up">
					We plan to change that with our product.
				</div>
				{/* pricing grid */}
				<div className="pricing-grid mt-5 mb-5" data-aos="zoom-in">
					{/* price 1 */}
					{color ? (
						<div className="pricing-grid-item  p-3">
							<div className="mb-5">
								<div className="title-part border-bottom text-lg-start text-center mb-3 p-3">
									<div className="price mb-3">
										<span className="me-3 ">$999</span>/month
									</div>
									<div className="price-deatils">Amazon Standard</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">
										Essential ARA Reports
									</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Exportable Tables</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Daily updates</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">
										Complete Historic Data
									</div>
								</div>
							</div>
							<div className="button-part mb-5 mt-3 text-center">
								<button
									className="btn-withoutselect w-100 d-flex justify-content-between align-items-center"
									onClick={() => setColor(!color)}
								>
									<span>Get Started</span>
									<i class="fas fa-arrow-right"></i>
								</button>
							</div>
						</div>
					) : (
						<div className="pricing-grid-item border-green text-lg-start text-center shadow p-3">
							<div className="mb-5">
								<div className="title-part border-bottom mb-3 p-3">
									<div className="price mb-3">
										<span className="me-3 color ">$999</span>/month
									</div>
									<div className="price-deatils">Amazon Standard</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">
										Essential ARA Reports
									</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Exportable Tables</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Daily updates</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">
										Complete Historic Data
									</div>
								</div>
							</div>
							<div className="button-part mb-5 mt-3 text-center">
								<button
									className="btn-withselect w-100 d-flex justify-content-between align-items-center"
									onClick={() => setColor(!color)}
								>
									<span>Get Started</span>
									<i class="fas fa-arrow-right"></i>
								</button>
							</div>
						</div>
					)}
					{/* price 2 */}
					{color1 ? (
						<div className="pricing-grid-item text-lg-start text-center p-3">
							<div className="mb-5">
								<div className="title-part border-bottom mb-3 p-3">
									<div className="price mb-3">
										<span className="me-3 ">$1299</span>/month
									</div>
									<div className="price-deatils">Amazon Standard</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">
										Essential ARA Reports
									</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Exportable Tables</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Daily updates</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">
										Complete Historic Data
									</div>
								</div>
								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Daily Emails</div>
								</div>
								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Customer Reviews</div>
								</div>
							</div>
							<div className="button-part mb-5 mt-3 text-center">
								<button
									className="btn-withoutselect w-100 d-flex justify-content-between align-items-center"
									onClick={() => setColor1(!color1)}
								>
									<span>Get Started</span>
									<i class="fas fa-arrow-right"></i>
								</button>
							</div>
						</div>
					) : (
						<div className="pricing-grid-item border-green text-lg-start text-center shadow p-3">
							<div className="mb-5">
								<div className="title-part border-bottom mb-3 p-3">
									<div className="price mb-3">
										<span className="me-3 color ">$1299</span>/month
									</div>
									<div className="price-deatils">Amazon Standard</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">
										Essential ARA Reports
									</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Exportable Tables</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Daily updates</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">
										Complete Historic Data
									</div>
								</div>
								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Daily Emails</div>
								</div>
								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Customer Reviews</div>
								</div>
							</div>
							<div className="button-part mb-5 mt-3 text-center">
								<button
									className="btn-withselect w-100 d-flex justify-content-between align-items-center"
									onClick={() => setColor1(!color1)}
								>
									<span>Get Started</span>
									<i class="fas fa-arrow-right"></i>
								</button>
							</div>
						</div>
					)}
					{/* price 3 */}
					{color2 ? (
						<div className="pricing-grid-item text-lg-start text-center p-3">
							<div className="mb-5">
								<div className="title-part border-bottom mb-3 p-3">
									<div className="price mb-3">
										<span className="me-3 ">$1699</span>/month
									</div>
									<div className="price-deatils">Amazon Standard</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Exportable Tables</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Daily Updates</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">
										Complete historic data
									</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Daily Emails</div>
								</div>
								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Customer Experience</div>
								</div>
								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Content Analysis</div>
								</div>
								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">
										Custom Data Integration
									</div>
								</div>
							</div>
							<div className="button-part mb-5 mt-3 text-center">
								<button
									className="btn-withoutselect w-100 d-flex justify-content-between align-items-center"
									onClick={() => setColor2(!color2)}
								>
									<span>Get Started</span>
									<i class="fas fa-arrow-right"></i>
								</button>
							</div>
						</div>
					) : (
						<div className="pricing-grid-item border-green text-lg-start text-center shadow p-3">
							<div className="mb-5">
								<div className="title-part border-bottom mb-3 p-3">
									<div className="price mb-3">
										<span className="me-3 color ">$1699</span>/month
									</div>
									<div className="price-deatils">Amazon Standard</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Exportable Tables</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Daily Updates</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">
										Complete historic data
									</div>
								</div>

								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Daily Emails</div>
								</div>
								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Customer Experience</div>
								</div>
								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">Content Analysis</div>
								</div>
								<div className="d-flex tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="tool-tick-text mx-3">
										Custom Data Integration
									</div>
								</div>
							</div>
							<div className="button-part mb-5 mt-3 text-center">
								<button
									className="btn-withselect w-100 d-flex justify-content-between align-items-center"
									onClick={() => setColor2(!color2)}
								>
									<span>Get Started</span>
									<i class="fas fa-arrow-right"></i>
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Pricing;
