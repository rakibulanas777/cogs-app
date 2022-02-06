import React from "react";
import bg from "../../Images/bg-image.png";
import tick from "../../Images/Vector (3).png";
const Standout = () => {
	return (
		<div className="standout">
			<div className="container mt-5 mb-5">
				<div className="row align-items-center">
					<div className="col-lg-6 col-11 mx-auto" data-aos="fade-right">
						<img src={bg} alt="" className="img-fluid" />
					</div>
					<div className="col-11 col-lg-5 mx-auto" data-aos="fade-up">
						<div className="products-title mb-3">What makes us stand out?</div>

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
						{/* button part  */}
						<div className="button-part mb-5 mt-5">
							<button className="left-btn mx-3 p-3">Request a Demo</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Standout;
