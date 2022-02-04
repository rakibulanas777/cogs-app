import React from "react";
import "./Subscribe.css";
const Subscribe = () => {
	return (
		<div className="subscribe-blog p-4">
			<div className="container">
				<div className="subscribe-blog-title text-center mt-5 mb-3">
					Subscribe to the latest updates
				</div>
				<div className="subscribe-details text-center mb-5">
					Subscribe to the latest updatesfor email newsletters
				</div>
				<div className="col-lg-4 col-11 mx-auto">
					<div className="input-btn-width shadow p-2 d-flex mb-5 w-100">
						<input
							type="text"
							className="w-100 input-subscribe"
							placeholder="Enter Your Email"
						/>
						<button className="button ">Subscribe</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
