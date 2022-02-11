import React from "react";
import { HashLink } from "react-router-hash-link";
import { Nav } from "react-bootstrap";
import logo from "../../Images/Group 4.png";
import facebook from "../../Images/Vector (7).svg";
import m from "../../Images/Vector (8).svg";
import i from "../../Images/Vector (9).svg";
import l from "../../Images/Vector (10).svg";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<footer class="footer-about">
			<div className="container relative">
				<div className="col-10 text-lg-start text-center col-lg-8 position-footer p-4 mx-auto">
					<div className="position-footer-office-title text-center mt-5 mb-2">
						Our Office
					</div>
					<div className="position-footer-deatils text-center mb-4">
						Our workforce is fully-remote and global; assembled the best team,{" "}
						<br className="d-none d-lg-block" />
						from across every corner of the globe
					</div>
					<div className="embed-responsive w-100 embed-responsive-16by9 mb-3">
						{/* <iframe
							
							src="https://www.google.com/maps"
							allowfullscreen
						></iframe> */}
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5782570740903!2d-74.04839613505668!3d40.727299844617086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2574c5c2d4d1d%3A0x245d7e61e9ae2eb2!2sHamilton%20Park%2C%20Jersey%20City%2C%20NJ%2007302%2C%20USA!5e0!3m2!1sen!2sbd!4v1644507319755!5m2!1sen!2sbd"
							className="embed-responsive-item w-100"
							allowfullscreen=""
							loading="lazy"
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
				<div class="row footer-grid1 px-4">
					<div class="footer-col">
						<Link to="/home">
							<img src={logo} alt="" className="img-fluid mb-3" />
						</Link>
						<div className="logo-bottom-text">
							Envisioning Growth through Broader Insights
						</div>
					</div>
					<div class="footer-col">
						<ul>
							<h5>Products</h5>
							<li>
								<Nav.Link as={HashLink} className="link" to="/product#feature">
									Features
								</Nav.Link>
							</li>
							<li>
								<Nav.Link as={HashLink} className="link" to="/pricing#pricing">
									Pricing
								</Nav.Link>
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
								<Nav.Link as={HashLink} className="link" to="/">
									Log in
								</Nav.Link>
							</li>
							<li>
								<Nav.Link as={HashLink} className="link" to="/">
									Sign up
								</Nav.Link>
							</li>
						</ul>
					</div>

					<div class="footer-col">
						<ul>
							<h5>Resources</h5>
							<li>
								<Nav.Link as={HashLink} className="link" to="/blog#blog">
									Blogs
								</Nav.Link>
							</li>
							<li>
								<Nav.Link as={HashLink} className="link" to="/pricing#faq">
									FAQs
								</Nav.Link>
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
								<Nav.Link as={HashLink} className="link" to="/about#story">
									Our story
								</Nav.Link>
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
