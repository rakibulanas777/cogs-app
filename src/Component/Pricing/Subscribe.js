import React from "react";
import "./Subscribe.css";
import mail from "../Images/envelope.svg";
const Subscribe = () => {
	return (
		<div className="subscribe-blog ">
			<div className="oval-icon p-4">
				<div className="container">
					<div className="subscribe-blog-title text-center mt-5 mb-3">
						Subscribe to the latest updates
					</div>
					<div className="subscribe-details text-center mb-5">
						Subscribe to the latest updatesfor email newsletters
					</div>
					<div className="col-lg-4 col-11 mx-auto">
						<div className="input-btn-width shadow p-2 d-flex mb-5 w-100">
							<img src={mail} alt="" className="ms-2 img-fluid" />
							<input
								type="text"
								className="input-subscribe"
								placeholder="Enter Your Email"
							/>
							<button className=" subscribe ">Subscribe</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
