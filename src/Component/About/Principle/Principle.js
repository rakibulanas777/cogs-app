import React from "react";
import circle from "../../Images/Ellipse 998.svg";
import "./Principle.css";
const Principle = () => {
	return (
		<div className="principle p-4">
			<div className="container mt-5 mb-5">
				<div className="row align-items-center">
					<div
						className="col-lg-6 col-11 border-radius p-4 mx-auto"
						data-aos="fade-up"
					>
						<img src={circle} className="circle-position" alt="" />
						<div className="principle-title mt-5  mb-3 text-center">
							Our Principles
						</div>
						<div className="principle-deatils text-center p-4">
							Visual COGS is a customer-centric and employee-centric
							organization driven by values. We believe that we can create a
							successful experience for vendors and sellers through our combined
							allegiance towards these principles.
						</div>
					</div>
					<div className="col-lg-6 col-11 mx-auto">
						<div className="divider mb-5" data-aos="zoom-in">
							<div className="innovation mb-2">Innovation</div>
							<div className="right-deatils mb-3">
								We believe that growth is infinite, and we always work towards
								improvement and expansion through frequent feedbacks and
								creatively solve arising problems.
							</div>
						</div>
						<div className="divider mb-5" data-aos="zoom-in">
							<div className="innovation mb-2">Innovation</div>
							<div className="right-deatils mb-3">
								We believe that growth is infinite, and we always work towards
								improvement and expansion through frequent feedbacks and
								creatively solve arising problems.
							</div>
						</div>
						<div className="divider mb-5" data-aos="zoom-in">
							<div className="innovation mb-2">Collaboration</div>
							<div className="right-deatils mb-3">
								Our teammates row together, creating an effective and healthy
								working environment. We embrace diversity and the opportunity to
								work with exceptional people from around the globe.
							</div>
						</div>
						<div className="divider mb-5" data-aos="zoom-in">
							<div className="innovation mb-2">Customer-centric team</div>
							<div className="right-deatils mb-3">
								We believe that the customer is the ‘boss’ and every idea in
								motion starts from the customer itself. We empathize with our
								customers, assist in shoulder their problems, and earn trust to
								form long-term relationships.
							</div>
						</div>
						<div className="divider mb-5" data-aos="zoom-in">
							<div className="innovation mb-2">
								Setting Goals and Yielding Results
							</div>
							<div className="right-deatils mb-3">
								One of our many objectives is to minimize the complexity and
								maximize the delivery to create success for thriving businesses
								of vendors and sellers. We constantly work towards raising the
								bar, strive towards the best delivery, and are accountable for
								the results we provide.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Principle;
