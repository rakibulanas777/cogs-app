import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Images/logo.png";
const Landing = () => {
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
			<div className="container mb-3">
				<a className="navbar-brand">
					<img src={logo} alt="" className="logo img-fluid" />
				</a>
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
							<a className="nav-link a-link1">Product</a>
						</li>
						<li class="nav-item mx-2 mb-lg-0 mb-2">
							<a className="nav-link  a-link1">Pricing</a>
						</li>
						<li class="nav-item mx-2 mb-lg-0 mb-2">
							<a className="nav-link  a-link1">Resources</a>
						</li>
						<li class="nav-item mx-2 mb-lg-0 mb-2">
							<a class="nav-link  a-link1" href="#Testimonials">
								Our Story
							</a>
						</li>
						<li class="nav-item mx-2 mb-lg-0 mb-2">
							<a class="nav-link  a-link1" href="#Testimonials">
								We ‘re Hiring
							</a>
						</li>
						<li class="nav-item mx-2 mb-lg-0 mb-2">
							<a class="nav-link  a-link1" href="#Testimonials">
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

export default Landing;
