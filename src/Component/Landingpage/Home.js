import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Shared from "../Shared/Shared";
import tick from "../Images/Vector (3).png";
import "./Home.css";
import Landing from "../Shared/Navbar/Landing";
import { NavLink } from "react-router-dom";
const Home = () => {
	return (
		<div className="header">
			<Navbar />
			<Landing />
			<div className="container">
				<div className="row mb-3">
					<div className="col-11 col-lg-4 mx-auto">
						<div className="from-box p-4">
							<div className="from-text mb-3">Request A Quote Now!</div>
							<form>
								<div class="mb-3">
									<input
										type="text"
										className="form-control home-input"
										placeholder="Your Name"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
									/>
								</div>
								<div class="mb-3">
									<input
										type="text"
										placeholder="Business Name"
										className="form-control home-input"
										id="exampleInputPassword1"
									/>
								</div>
								<div class="mb-3">
									<input
										type="email"
										placeholder="Email Address"
										class="form-control home-input"
										id="exampleInputPassword1"
									/>
								</div>
								<div class="mb-3">
									<input
										type="text"
										placeholder="Phone No."
										class="form-control home-input"
										id="exampleInputPassword1"
									/>
								</div>
								<NavLink to="/home">
									<button
										type="submit"
										class="btn button w-100 btn-primary mb-3 p-3"
									>
										Request Free Quote
									</button>
								</NavLink>
							</form>
						</div>
					</div>
					<div className="col-11 col-lg-7 mx-auto">
						<div className="right-home-title mb-3">
							Empowering Businesses with Maximized, 360-degree MarketPlace
							Optimization
						</div>
						<div className="landing-page-deatils">
							Among about seven million sellers, only 1.9 million sellers are
							actively selling on the marketplace.
						</div>
						<div className="d-flex tool-bottom mt-3">
							<div className="img-tick">
								<img src={tick} width="20px" alt="" />
							</div>
							<div className="landing-tick-text mx-3">
								Increase in revenue/sales
							</div>
						</div>
						<div className="d-flex tool-bottom mt-3">
							<div className="img-tick">
								<img src={tick} width="20px" alt="" />
							</div>
							<div className="landing-tick-text mx-3">
								Increase in revenue/sales
							</div>
						</div>
						<div className="d-flex tool-bottom mt-3">
							<div className="img-tick">
								<img src={tick} width="20px" alt="" />
							</div>
							<div className="landing-tick-text mx-3">
								Increase in revenue/sales
							</div>
						</div>
						<div className="d-flex tool-bottom mt-3">
							<div className="img-tick">
								<img src={tick} width="20px" alt="" />
							</div>
							<div className="landing-tick-text mx-3">
								Increase in revenue/sales
							</div>
						</div>
						<div className="d-flex tool-bottom mt-3">
							<div className="img-tick">
								<img src={tick} width="20px" alt="" />
							</div>
							<div className="landing-tick-text mx-3">
								Increase in revenue/sales
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
