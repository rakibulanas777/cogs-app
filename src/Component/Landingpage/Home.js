import React, { useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Shared from "../Shared/Shared";
import tick from "../Images/Vector (3).png";
import line from "../Images/Line 6.svg";
import "./Home.css";
import Landing from "../Shared/Navbar/Landing";
import { NavLink } from "react-router-dom";
const Home = () => {
	const handleClick = (e) => {
		e.preventDefault();
	};

	///get value
	const [login, loginData] = useState({});
	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newloginData = { ...login };
		newloginData[field] = value;
		loginData(newloginData);
	};
	return (
		<div className="header">
			<Navbar />
			<Landing />
			<div className="container home-center">
				<div className="row mb-3">
					{/* left part from box */}
					<div className="col-11 col-lg-4 mx-auto">
						<div className="from-box mb-2 p-4">
							<div className="from-text mb-2">Request A Quote Now!</div>
							<form>
								<div className="mb-3">
									<input
										type="text"
										className="form-control home-input"
										placeholder="Your Name"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
									/>
								</div>
								<div className="mb-3">
									<input
										type="text"
										placeholder="Business Name"
										className="form-control home-input"
										id="exampleInputPassword1"
									/>
								</div>
								<div className="mb-3">
									<input
										type="email"
										placeholder="Email Address"
										class="form-control home-input"
										id="exampleInputPassword1"
									/>
								</div>
								<div className="mb-3">
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

						<div className="new-data w-100 mb-2">
							<div className="line"></div>
							<span className="new-data-text text-center">
								Reach us out instead
							</span>
							<div className="line"></div>
						</div>
						{/* icon part  */}
						<div className="icon-part-home mb-2">
							{/* email icon  */}
							<div className="icon-box-home">
								<i class="fas fa-envelope"></i>
							</div>
							{/* facebook icon  */}
							<div className="icon-box-home">
								<i class="fab fa-facebook-f"></i>
							</div>
							{/* instagram icon  */}
							<div className="icon-box-home">
								<i class="fab fa-instagram"></i>
							</div>
							{/* linkedin icon  */}
							<div className="icon-box-home">
								<i class="fab fa-linkedin-in"></i>
							</div>
							{/* email icon  */}
							<div className="icon-box-home">
								<i class="fas fa-envelope"></i>
							</div>
						</div>
					</div>
					{/* right box  */}
					<div className="col-11 col-lg-7 text-lg-start text-center order-first order-lg-last mx-auto">
						<div className="right-home-title mb-3 mt-5">
							Empowering Businesses with Maximized, 360-degree MarketPlace
							Optimization
						</div>
						<div className="landing-page-deatils">
							Among about seven million sellers, only 1.9 million sellers are
							actively selling on the marketplace.
						</div>
						<div className="responsive-grid mb-5">
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
									squeeze more profits
								</div>
							</div>
							<div className="d-flex tool-bottom mt-3">
								<div className="img-tick">
									<img src={tick} width="20px" alt="" />
								</div>
								<div className="landing-tick-text mx-3">
									Time save percentage
								</div>
							</div>
							<div className="d-flex tool-bottom mt-3">
								<div className="img-tick">
									<img src={tick} width="20px" alt="" />
								</div>
								<div className="landing-tick-text mx-3">Overall Efficiency</div>
							</div>
							<div className="d-flex tool-bottom mt-3">
								<div className="img-tick">
									<img src={tick} width="20px" alt="" />
								</div>
								<div className="landing-tick-text mx-3">
									Squeeze more profits
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
