import React from "react";
import logo from "../../Images/Group 4.png";
// import "./Footer.css";
const Footer = () => {
	return (
		<footer class="footer">
			<div className="container retalive">
				<div className="col-10 col-lg-8 position-footer p-4 mx-auto">
					<div className="position-footer-office-title text-center mt-5 mb-2">
						Our Office
					</div>
					<div className="position-footer-deatils text-center mb-4">
						Our workforce is fully-remote and global; assembled the best team,{" "}
						<br />
						from across every corner of the globe
					</div>
					<div className="embed-responsive w-100 embed-responsive-16by9 mb-3">
						<iframe
							className="embed-responsive-item w-100"
							src="https://www.google.com/maps/@24.2518452,89.9000487,15z"
							allowfullscreen
						></iframe>
					</div>
					<div className="address mb-3">Address</div>
					<div className="position-footer-deatils mb-4">
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using
					</div>
				</div>
			</div>
			<div class="container ">
				<div class="row footer-grid1">
					<div class="footer-col-30">
						<img src={logo} alt="" className="img-fluid mb-3" />
						<div className="logo-bottom-text">
							Envisioning Growth through Broader Insights
						</div>
					</div>
					<div class="footer-col">
						<ul>
							<h5>Products</h5>
							<li>
								<a href="#">Features</a>
							</li>
							<li>
								<a href="#">Pricing</a>
							</li>
							<li>
								<a href="#">Recent Updates</a>
							</li>
						</ul>
					</div>
					<div class="footer-col">
						<ul>
							<h5>Account</h5>

							<li>
								<a href="#">Login</a>
							</li>
							<li>
								<a href="#">Sign up</a>
							</li>
						</ul>
					</div>

					<div class="footer-col">
						<ul>
							<h5>Resources</h5>
							<li>
								<a href="#">Blogs</a>
							</li>
							<li>
								<a href="#">FAQs</a>
							</li>
							<li>
								<a href="#">Documentation</a>
							</li>
						</ul>
					</div>

					<div class="footer-col">
						<ul>
							<h5>About Us</h5>
							<li>
								<a href="#">Our story</a>
							</li>
							<li>
								<a href="#"> We’re hiring!</a>
							</li>
						</ul>
					</div>
					<div class="footer-col">
						<ul>
							<h5>Contact</h5>
							<div className="last-deatils">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</div>
						</ul>
					</div>
				</div>
				<div className="copyright-part text-center p-3 border-top">
					Copyright © 2022. Visual COGS
				</div>
			</div>
		</footer>
	);
};

export default Footer;
