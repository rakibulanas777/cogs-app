import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Images/Folder 1.png";
import "./Navbar.css";

const Navbar = () => {
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
		<nav
			className={
				color
					? "navbar navbar-expand-lg sticky-top scroll box-shadow  "
					: "navbar navbar-expand-lg sticky-top withoutScroll "
			}
		>
			<div className="container">
				<NavLink
					to="/"
					className="navbar-brand d-lg-none d-inline-block"
					href="#"
				>
					<img src={logo} width="130px" className="img-fluid" alt="" />
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
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav  ms-auto text-lg-center mb-lg-0">
						<li className="nav-item mx-2 p-2 d-lg-none d-inline-block mb-lg-0 mb-2">
							<a className="nav-link a-link">Product</a>
						</li>
						<li className="nav-item mx-2 p-2 d-lg-none d-inline-block mb-lg-0 mb-2">
							<a className="nav-link  a-link">Pricing</a>
						</li>
						<li className="nav-item mx-2 p-2 d-lg-none d-inline-block mb-lg-0 mb-2">
							<a className="nav-link  a-link">Resources</a>
						</li>
						<li className="nav-item mx-2 p-2 d-lg-none d-inline-block mb-lg-0 mb-2">
							<a className="nav-link  a-link">Our Story</a>
						</li>
						<li className="nav-item mx-2 p-2 d-lg-none d-inline-block mb-lg-0 mb-2">
							<a className="nav-link  a-link">We ‘re Hiring</a>
						</li>
						<li className="nav-item mx-2 p-2 d-lg-none d-inline-block mb-lg-0 mb-2">
							<a className="nav-link  a-link">Faq</a>
						</li>

						<div className="d-flex align-items-center">
							<li className="nav-item mx-3 mb-lg-0 mb-2">
								<a className="nav-link" href="#about">
									Sign up
								</a>
							</li>

							<li className="nav-item mx-3 mb-lg-0 mb-2">
								<a className="nav-link" href="#Testimonials">
									Login
								</a>
							</li>
							<li className="nav-item mx-3 mb-lg-0 mb-2">
								<i class="fas fa-search"></i>
							</li>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
