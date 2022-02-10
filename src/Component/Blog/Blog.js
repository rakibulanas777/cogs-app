import React from "react";
import Footer from "../Home/Footer/Footer";
import Bcarousoul from "../Home/Slider/Bcarousoul";
import FCarosoul from "../Home/Slider/FCarosoul";
import Navbar from "../Shared/Navbar/Navbar";
import Shared from "../Shared/Shared";
import mail from "../Images/envelope.svg";
import "./Blog.css";
const Blog = () => {
	return (
		<div className="blog-page">
			<Navbar />
			<Shared />
			<div className="header-blog">
				<div className="container mt-5 mb-5">
					<div className="blog-page-title text-center mb-5">
						Learn from the <span>best</span> to stay ahead in the <br />{" "}
						<span>marketplace</span> with the <span>latest tips</span> and{" "}
						<span>strategies</span>
					</div>
					<div className="col-lg-6 col-11 mx-auto">
						<div className="input-btn-width shadow p-2 d-flex mb-5 w-100">
							<img src={mail} alt="" className="ms-2 img-fluid" />
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
			<Bcarousoul />
			<FCarosoul />
			<Footer />
		</div>
	);
};

export default Blog;
