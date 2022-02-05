import React from "react";
import "./Partner.css";
import tick from "../../Images/Vector (3).png";
import one from "../../Images/1.png";
import click from "../../Images/click (1) 1.png";
const Partner = () => {
	return (
		<div className="partner p-4">
			<div className="partner-title mt-5 mb-5 text-center">
				Why Partner with us?
			</div>
			<div className="container">
				<div className="partner-roadmap mb-5">
					<div className="d-flex mb-3 align-items-center justify-content-evenly">
						{/* left part */}
						<div className="text-part">
							<div className="products-title mb-3">
								What makes us stand out?
							</div>

							<div className="d-flex tool-bottom mt-3">
								<div className="img-tick">
									<img src={tick} width="20px" alt="" />
								</div>
								<div className="tool-tick-text mx-3">Track daily records,</div>
							</div>
							<div className="d-flex tool-bottom mt-3">
								<div className="img-tick">
									<img src={tick} width="20px" alt="" />
								</div>
								<div className="tool-tick-text mx-3">
									Compare weekly performance
								</div>
							</div>
							<div className="d-flex tool-bottom mt-3">
								<div className="img-tick">
									<img src={tick} width="20px" alt="" />
								</div>
								<div className="tool-tick-text mx-3">Set annual goals.</div>
							</div>
						</div>
						{/* flex part  */}
						<div className=" align-items-center">
							<div className="gallery-picture ms-3 p-3">
								<img
									src={click}
									alt=""
									width="100px"
									className="img-fluid gallery"
								/>
							</div>
						</div>
					</div>
					<div className="d-flex mb-3 align-items-center justify-content-evenly">
						{/* flex part  */}
						<div className=" align-items-center">
							<div className="gallery-picture ms-3 p-3">
								<img
									src={click}
									alt=""
									width="100px"
									className="img-fluid gallery"
								/>
							</div>
						</div>
						{/* left part */}
						<div className="text-part">
							<div className="products-title mb-3">
								What makes us stand out?
							</div>

							<div className="d-flex tool-bottom mt-3">
								<div className="img-tick">
									<img src={tick} width="20px" alt="" />
								</div>
								<div className="tool-tick-text mx-3">Track daily records,</div>
							</div>
							<div className="d-flex tool-bottom mt-3">
								<div className="img-tick">
									<img src={tick} width="20px" alt="" />
								</div>
								<div className="tool-tick-text mx-3">
									Compare weekly performance
								</div>
							</div>
							<div className="d-flex tool-bottom mt-3">
								<div className="img-tick">
									<img src={tick} width="20px" alt="" />
								</div>
								<div className="tool-tick-text mx-3">Set annual goals.</div>
							</div>
						</div>
					</div>
					<div className="d-flex mb-3 align-items-center justify-content-evenly">
						{/* left part */}
						<div className="text-part">
							<div className="products-title mb-3">
								What makes us stand out?
							</div>

							<div className="d-flex tool-bottom mt-3">
								<div className="img-tick">
									<img src={tick} width="20px" alt="" />
								</div>
								<div className="tool-tick-text mx-3">Track daily records,</div>
							</div>
							<div className="d-flex tool-bottom mt-3">
								<div className="img-tick">
									<img src={tick} width="20px" alt="" />
								</div>
								<div className="tool-tick-text mx-3">
									Compare weekly performance
								</div>
							</div>
							<div className="d-flex tool-bottom mt-3">
								<div className="img-tick">
									<img src={tick} width="20px" alt="" />
								</div>
								<div className="tool-tick-text mx-3">Set annual goals.</div>
							</div>
						</div>
						{/* flex part  */}
						<div className=" align-items-center">
							<div className="gallery-picture ms-3 p-3">
								<img
									src={click}
									alt=""
									width="100px"
									className="img-fluid gallery"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partner;
