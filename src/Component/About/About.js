import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Shared from "../Shared/Shared";
import line from "../Images/Vector 13.svg";
import right from "../Images/Group 237469.png";
import left from "../Images/Group 237478.png";
import "./About.css";
import Principle from "./Principle/Principle";
import Footer from "./Footer/Footer";
import Latest from "./Latest/Latest";
import Leadership from "./Leadership/Leadership";
const About = () => {
	return (
		<div className="about-page">
			<Navbar />
			<Shared />
			<div className="about-us-header " data-aos="fade-up" id="story">
				<div className="about-us-title text-center mb-3">Who we are?</div>
				<div className="about-us-deatils mb-5 p-3 text-center">
					Our team of e-commerce specialists is entirely dedicated to customer
					success <br className="d-none d-lg-block" /> by incrementing sales and
					comprehensive growth of businesses.
				</div>
			</div>
			<div className="our-story-bg mb-5 mt-5 p-4">
				<div className="container mt-5 mb-5">
					{/* left part  */}
					<div className="ourstory mb-3 d-lg-none align-items-center">
						<div className="ourstory-title text-lg-start text-center ">
							Our story
						</div>
						<div className="text-center">
							<img src={line} className="text-center" alt="" />
						</div>
					</div>
					<div className="row align-items-center">
						<div
							className="col-lg-4 col-11 text-lg-start text-center mx-auto "
							data-aos="fade-up"
						>
							<div className="ourstory d-none d-lg-flex mb-3  align-items-center">
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
							<button className="learn-more mt-lg-0 mt-3 mb-5 text-lg-start text-center">
								Learn More
							</button>
						</div>
						{/* right-part  */}
						<div
							className="col-lg-6 order-first order-lg-last  col-11 mt-lg-0 mt-3 mx-auto"
							data-aos="fade-down"
						>
							<img src={right} alt="" className="img-fluid mb-5" />
						</div>
					</div>
					<div className="row align-items-center">
						{/* left  */}
						<div className="ourstory mb-3 d-lg-none align-items-center">
							<div className="ourstory-title text-lg-start text-center ">
								Our Mission
							</div>
							<div className="text-center">
								<img src={line} className="text-center" alt="" />
							</div>
						</div>
						<div
							className="col-lg-6 col-11 text-lg-start text-center mx-auto"
							data-aos="fade-up"
						>
							<img src={left} alt="" className="img-fluid mt-5 mb-5" />
						</div>
						{/* right part  */}
						<div
							className="col-lg-4 text-lg-start text-center col-11 mx-auto"
							data-aos="fade-down"
						>
							<div className="ourstory d-none mb-3 d-lg-flex align-items-center">
								<div className="ourstory-title text-lg-start text-center ">
									Our Mission
								</div>
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
			<Leadership />
			<Latest />
			<Footer />
		</div>
	);
};

export default About;
