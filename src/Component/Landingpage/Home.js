import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Shared from "../Shared/Shared";
import "./Home.css";
const Home = () => {
	return (
		<div className="header">
			<Navbar />
			<Shared />
			<div className="container mt-5">
				<div className="row mt-5 mb-5">
					<div className="col-10 col-lg-4 mx-auto">
						<div className="from-box p-4">
							<div className="from-text">Request A Quote Now!</div>
							<form>
								<div class="mb-3">
									<input
										type="email"
										class="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
									/>
								</div>
								<div class="mb-3">
									<input
										type="password"
										class="form-control"
										id="exampleInputPassword1"
									/>
								</div>
								<div class="mb-3">
									<input
										type="password"
										class="form-control"
										id="exampleInputPassword1"
									/>
								</div>
								<div class="mb-3">
									<input
										type="password"
										class="form-control"
										id="exampleInputPassword1"
									/>
								</div>

								<button type="submit" class="btn w-100 btn-primary">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
