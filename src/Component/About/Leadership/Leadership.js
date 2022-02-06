import React from "react";
import "./Leadership.css";
const Leadership = () => {
	return (
		<div className="leadership p-4">
			<div className="container mt-5 mb-5">
				<div className="row align-items-center">
					<div className="col-lg-5 col-11 mx-auto">
						<div className="leader-team mb-3">The Leadership Team</div>
						<div className="leader-deatils mb-4">
							Visual COGS was visualized by leading e-commerce experts and
							thoughtful pioneers aiming to build an efficient, cooperative team
							environment and empower brands and sellers with unmatched,
							collaborative product value.{" "}
						</div>
						<div className="join-team mb-4"> Want to join our team?</div>
						<button className="button ">Explore Opportunities</button>
					</div>
					<div className="col-lg-6 col-11 mx-auto"></div>
				</div>
			</div>
		</div>
	);
};

export default Leadership;
