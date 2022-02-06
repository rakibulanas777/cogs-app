import React from "react";
import logo from "../../Images/Group 4.png";
import facebook from "../../Images/Vector (7).svg";
import m from "../../Images/Vector (8).svg";
import i from "../../Images/Vector (9).svg";
import l from "../../Images/Vector (10).svg";
import "./Footer.css";
const Footer = () => {
	return (
		<footer class="footer">
			<div className="container retalive">
				<div className="col-10 col-lg-8 position-footer p-4 mx-auto">
					<div className="position-footer-title1 text-center mt-5 mb-4">
						Ready to Boost Your Sales and Outrun your Competitions?
					</div>
					<div className="button-part mb-5 text-center">
						<button className="right-btn-footer mx-3 mb-lg-0 mb-3">
							Sign up Today
						</button>
						<button className="right-btn-footer mx-3">Request a Demo</button>
					</div>
				</div>
			</div>
			<div class="container ">
				<div class="row footer-grid2">
					<div class="footer-col">
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
							<div className="last-deatils mb-3">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</div>
							<div className="icon-footer-grid">
								<img src={facebook} alt="" />
								<img src={m} alt="" />
								<img src={i} alt="" />
								<img src={l} alt="" />
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
