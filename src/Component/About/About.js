import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Shared from "../Shared/Shared";
import line from "../Images/Vector 13.svg";
import right from "../Images/Group 237469.png";
import left from "../Images/Group 237478.png";
import "./About.css";
import Principle from "./Principle/Principle";
import Footer from "./Footer/Footer";
const About = () => {
	return (
		<div className="about-page">
			<Navbar />
			<Shared />
			<div className="about-us-header ">
				<div className="about-us-title text-center mb-3">Who we are?</div>
				<div className="about-us-deatils mb-5 text-center">
					Our team of e-commerce specialists is entirely dedicated to customer
					success <br /> by incrementing sales and comprehensive growth of
					businesses.
				</div>
			</div>
			<div className="our-story-bg mb-5 mt-5 p-4">
				<div className="container mt-5 mb-5">
					<div className="row align-items-center">
						{/* left part  */}
						<div className="col-lg-4 col-11 mx-auto">
							<div className="ourstory mb-3 d-flex align-items-center">
								<img src={line} alt="" />
								<div className="ourstory-title">Our Story</div>
							</div>
							<div className="ourstory-deatils mb-3">
								Founded in 2020, Visual COGS was modeled on the idea by
								professional e-commerce vendors, skilled developers, and
								e-commerce marketers. Understanding the pain of staying ahead in
								the pool of cut-throat competition, the founders re-imagined
								integration to create dashboards, insights, and reports to
								fulfill the ambition of growing businesses of sellers and
								vendors to augment sales.
							</div>
							<button className="learn-more">Learn More</button>
						</div>
						{/* right-part  */}
						<div className="col-lg-6 col-11 mx-auto">
							<img src={right} alt="" className="img-fluid mb-5" />
						</div>
						{/* left  */}
						<div className="col-lg-6 col-11 mx-auto">
							<img src={left} alt="" className="img-fluid mt-5 mb-5" />
						</div>
						{/* right part  */}
						<div className="col-lg-4 col-11 mx-auto">
							<div className="ourstory mb-3 d-lg-flex align-items-center">
								<img src={line} className="d-none d-lg-inline-block" alt="" />
								<div className="ourstory-title text-lg-start text-center ">
									Our Mission
								</div>
							</div>
							<div className="img-center text-center mb-2">
								<img
									src={line}
									className="d-lg-none d-inline-block text-center"
									alt=""
								/>
							</div>
							<div className="ourstory-deatils mb-3">
								Help vendors and sellers maximize their potential and boost
								sales through reports and insights. We want to Empower
								businesses with Maximized, 360-degree marketplace optimization.
								We ensure to provide one platform for all the information your
								business needs.
							</div>
						</div>
					</div>
				</div>
			</div>
			<Principle />
			<Footer />
		</div>
	);
};

export default About;
