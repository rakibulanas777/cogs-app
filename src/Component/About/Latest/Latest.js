import React from "react";
import Clatest from "../../Home/Slider/Clatest";
import bolg from "../../Images/Rectangle 6221.png";
import user from "../../Images/Ellipse 1002.png";
import mail from "../../Images/envelope.svg";
import computer from "../../Images/Rectangle 6221 (1).png";
import "./Latest.css";
const Latest = () => {
	return (
		<div className="latest-blog p-4">
			<div className="container mt-5 mb-5">
				<div className="row align-items-center">
					<div className="col-11 col-lg-6 mx-auto">
						<Clatest />
						{/* testimonial 1 */}
						<div className="grid-box">
							<div
								className="grid-box-slider carousel-item active p-2"
								data-aos="zoom-in-up"
							>
								<div className="top-part mb-4 d-flex justify-content-between  align-items-center">
									<div className="blog-img">
										<img src={bolg} alt="" className="img-fluid" />
									</div>
								</div>
								<div className="bottom-title mb-3">
									7 Steps To An Effective Marketing Strategy
								</div>
								<div className="blog-owner align-items-center d-flex mb-3">
									<div className="user me-3">
										<img src={user} alt="" className="img-fluid" />
									</div>
									<div className="extra-text d-flex">
										<span>Adrian Harris</span>
										<span>|</span>
										<span>Nov 5, 2018</span>
									</div>
								</div>
								<div className="bottom-deatils mb-3">
									There are many variations of passages of Lorem Ipsum
									available, but the majority have ....
								</div>
							</div>
							{/* testimonial 2 */}
							<div
								className="grid-box-slider carousel-item active p-2"
								data-aos="zoom-in-up"
							>
								<div className="top-part mb-4 d-flex justify-content-between  align-items-center">
									<div className="blog-img">
										<img src={computer} alt="" className="img-fluid" />
									</div>
								</div>
								<div className="bottom-title mb-3">
									7 Steps To An Effective Marketing Strategy
								</div>
								<div className="blog-owner align-items-center d-flex mb-3">
									<div className="user me-3">
										<img src={user} alt="" className="img-fluid" />
									</div>
									<div className="extra-text d-flex">
										<span>Adrian Harris</span>
										<span>|</span>
										<span>Nov 5, 2018</span>
									</div>
								</div>
								<div className="bottom-deatils mb-3">
									There are many variations of passages of Lorem Ipsum
									available, but the majority have ....
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-11 mx-auto order-first order-lg-last ">
						<div className="latest-blog-title text-center text-lg-start mt-5 mt-lg-0 mb-3">
							Latest Blog Post
						</div>
						<div className="latest-blog-deatils mb-3">
							Subscribe to our latest blog post now just by entering your email
							address. We dont do spam and will be notifying you about our new
							posts regularly.
						</div>
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

export default Latest;
