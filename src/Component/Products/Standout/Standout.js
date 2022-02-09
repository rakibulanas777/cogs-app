import React from "react";
import bg from "../../Images/bg-image.png";
import tick from "../../Images/Vector (3).png";
const Standout = () => {
	return (
		<div className="standout">
			<div className="container mt-5 mb-5">
				<div className="products-title d-lg-none text-center mt-5 mb-5">
					What makes us stand out?
				</div>
				<div className="row align-items-center">
					<div className="col-lg-6 col-11 mx-auto" data-aos="fade-right">
						<img src={bg} alt="" className="img-fluid" />
					</div>
					<div className="col-11 col-lg-5 mx-auto" data-aos="fade-up">
						<div className="products-title d-none d-lg-block mb-5">
							What makes us stand out?
						</div>

						<div className="d-flex align-items-center tool-bottom mt-4">
							<div className="img-tick">
								<img src={tick} width="20px" alt="" />
							</div>
							<div className="product-tick-text mx-3">
								Data analytics, filtering, Insights
							</div>
						</div>
						<div className="d-flex tool-bottom mt-4">
							<div className="img-tick">
								<img src={tick} width="20px" alt="" />
							</div>
							<div className="product-tick-text mx-3">
								Track inventory health and sales records
								(daily/weekly/monthly/yearly)
							</div>
						</div>
						<div className="d-flex tool-bottom mt-4">
							<div className="img-tick">
								<img src={tick} width="20px" alt="" />
							</div>
							<div className="product-tick-text mx-3">
								{" "}
								Unit Forcast - 26 weeks estimation of customer demand price
								value.
							</div>
						</div>
						<div className="d-flex tool-bottom mt-4">
							<div className="img-tick">
								<img src={tick} width="20px" alt="" />
							</div>
							<div className="product-tick-text mx-3">
								{" "}
								Track average weekly/monthly conversion rate
							</div>
						</div>
						{/* button part  */}
						<div className="button-part mb-5 mt-5">
							<button className="left-btn mx-3 p-3">Sign up today!</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Standout;
