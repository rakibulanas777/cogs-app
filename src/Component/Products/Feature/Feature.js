import React from "react";
import "./Feature.css";
import cloud from "../../Images/cloud 1.svg";
import tick from "../../Images/Icon.png";
import box from "../../Images/package 1.svg";
import price from "../../Images/price-list 1.svg";
import question from "../../Images/question 1.svg";
import team from "../../Images/team 1.svg";
const Feature = () => {
	return (
		<div className="product-feature p-4">
			<div className="container mt-5 mb-5">
				<div
					className="product-feature-title text-center mb-3"
					data-aos="fade-up"
				>
					Our Awesome Features
				</div>
				<div
					className="product-feature-deatils text-center mb-4"
					data-aos="zoom-in"
				>
					With Visual COGS, stay updated, in stock and ahead of your
					competition.
				</div>
				<div className="row">
					<div
						className="col-11 col-lg-10 mx-auto p-4 shadow feature-box mb-4"
						data-aos="zoom-in"
					>
						<div className="d-flex align-items-center flex-lg-row flex-column mb-4">
							<div className="left-feature mb-3 me-5 mb-lg-0">
								<img src={cloud} className="img-fluid" alt="" />
							</div>
							<div>
								<div className="right-part">
									<div className="title-feature text-lg-start text-center">
										ONLINE AVAILABILITY
									</div>
									<div className="d-flex tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="price-tick-text mx-3">
											Get daily email notifications in case your products get
											out of stock.
										</div>
									</div>
									<div className="d-flex tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="price-tick-text mx-3">
											Keep daily records of in-stock, out stock, online
											availability and much more
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* BUY BOX */}
					<div
						className="col-11 col-lg-10 mx-auto p-4 shadow feature-box mb-4"
						data-aos="zoom-in"
					>
						<div className="d-flex align-items-center flex-lg-row flex-column mb-4">
							<div className="left-feature mb-3 me-5 mb-lg-0">
								<img src={box} className="img-fluid" alt="" />
							</div>
							<div>
								<div className="right-part">
									<div className="title-feature text-lg-start text-center">
										BUY BOX
									</div>
									<div className="d-flex tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="price-tick-text mx-3">
											Track daily, weekly, monthly and yearly records of your
											won and lost buy box counts.
										</div>
									</div>
									<div className="d-flex tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="price-tick-text mx-3">
											Track your competitors’ data that is helping them win the
											buy box.
										</div>
									</div>
									<div className="d-flex tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="price-tick-text mx-3">
											Find the exact price at which you lost or won the buy box.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* PRICE CHANGES */}
					<div
						className="col-11 col-lg-10 mx-auto p-4 shadow feature-box mb-4"
						data-aos="zoom-in"
					>
						<div className="d-flex align-items-center flex-lg-row flex-column mb-4">
							<div className="left-feature mb-3 me-5 mb-lg-0">
								<img src={price} className="img-fluid" alt="" />
							</div>
							<div>
								<div className="right-part">
									<div className="title-feature text-lg-start text-center">
										PRICE CHANGES
									</div>
									<div className="d-flex tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="price-tick-text mx-3">
											Promote your products with additional oversight.
										</div>
									</div>
									<div className="d-flex tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="price-tick-text mx-3">
											See how many products have changed pricing in the last
											hour, 24 hours, last week.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Question and Answers */}
					<div
						className="col-11 col-lg-10 mx-auto p-4 shadow feature-box mb-4"
						data-aos="zoom-in"
					>
						<div className="d-flex align-items-center flex-lg-row flex-column mb-4">
							<div className="left-feature mb-3 me-5 mb-lg-0">
								<img src={question} className="img-fluid" alt="" />
							</div>
							<div>
								<div className="right-part">
									<div className="title-feature text-lg-start text-center">
										Question and Answers
									</div>
									<div className="d-flex tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="price-tick-text mx-3">
											Track questions and answers asked about your product
										</div>
									</div>
									<div className="d-flex tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="price-tick-text mx-3">
											Track questions and answers asked about your product
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* REVIEWS / Rating */}
					<div
						className="col-11 col-lg-10 mx-auto p-4 shadow feature-box mb-4"
						data-aos="zoom-in"
					>
						<div className="d-flex align-items-center flex-lg-row flex-column mb-4">
							<div className="left-feature mb-3 me-5 mb-lg-0">
								<img src={team} className="img-fluid" alt="" />
							</div>
							<div>
								<div className="right-part">
									<div className="title-feature text-lg-start text-center">
										REVIEWS / Rating
									</div>
									<div className="d-flex tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="price-tick-text mx-3">
											Track your review counts.
										</div>
									</div>
									<div className="d-flex tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="price-tick-text mx-3">
											Pick out negative reviews to improve your customer
											experience.
										</div>
									</div>
									<div className="d-flex tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="price-tick-text mx-3">
											Find out the most and the least used word counts on your
											reviews.
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
