import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/Group 4.png";
const Shared = () => {
	const [color, setColor] = useState(false);
	const changeColor = () => {
		if (window.scrollY >= 110) {
			setColor(true);
		} else {
			setColor(false);
		}
	};
	window.addEventListener("scroll", changeColor);

	return (
		<nav className="navbar navbar-expand-lg box-shadow d-none d-lg-block">
			<div className="container mb-5">
				<NavLink className="navbar-brand" to="/">
					<img src={logo} alt="" className="logo img-fluid" />
				</NavLink>
				<button
					class="navbar-toggler collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="toggler-icon top-bar"></span>
					<span className="toggler-icon middle-bar"></span>
					<span className="toggler-icon bottom-bar"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ms-auto">
						<li class="nav-item  mx-2 mb-lg-0 mb-2">
							<NavLink className="nav-link a-link" to="/product">
								Product
							</NavLink>
						</li>
						<li class="nav-item mx-2 mb-lg-0 mb-2">
							<NavLink className="nav-link  a-link" to="/pricing">
								Pricing
							</NavLink>
						</li>
						<li class="nav-item mx-2 mb-lg-0 mb-2">
							<NavLink className="nav-link  a-link" to="/resources">
								Resources
							</NavLink>
						</li>
						<li class="nav-item mx-2 mb-lg-0 mb-2">
							<a class="nav-link  a-link" href="#Testimonials">
								Our Story
							</a>
						</li>
						<li class="nav-item mx-2 mb-lg-0 mb-2">
							<a class="nav-link  a-link" href="#Testimonials">
								We ‘re Hiring
							</a>
						</li>
						<li class="nav-item mx-2 mb-lg-0 mb-2">
							<a class="nav-link  a-link" href="#Testimonials">
								Faq
							</a>
						</li>
						<a
							href="https://dashboard.atlasproxies.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button type="button" className="button ms-lg-5">
								Request a demo
							</button>
						</a>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Shared;
