import React from "react";
import "./Partner.css";
import tick from "../../Images/Vector (3).png";
import one from "../../Images/1.png";
import two from "../../Images/2.png";
import three from "../../Images/3.png";
import click from "../../Images/click (1) 1.png";
import analyse from "../../Images/analysis (1) 1.png";
import vline from "../../Images/Vector 14.png";
import xml from "../../Images/XMLID_1024_.png";
const Partner = () => {
	return (
		<div className="partner p-4">
			<div className="partner-title mt-5 mb-5 text-center">
				Why Partner with us?
			</div>
			<div className="container">
				{/* large screen device  */}
				<div className="large d-lg-block d-none">
					<div className="position-line d-lg-block d-none">
						<img src={vline} alt="" className="img-fluid vposition" />
					</div>
					<div className="partner-roadmap mb-5">
						<div className="partner-grid-1 mb-5 mx-auto" data-aos="fade-up">
							<div className="text-part">
								<div className="products-title mb-3">
									All of your product history <br /> one click away.
								</div>

								<div className="d-flex align-items-center tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="product-tick-text mx-3">
										Distribution of Latest Page Ratings
									</div>
								</div>
								<div className="d-flex align-items-center tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="product-tick-text mx-3">Bestseller rank</div>
								</div>
								<div className="d-flex align-items-center tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="product-tick-text mx-3">
										Image count, videos count, bullet counts, title length,
										description length. (All in one place)
									</div>
								</div>
							</div>
							<div className="roadmap-number d-none d-lg-block shadow">
								<img src={one} alt="" className="img-fluid img-position" />
							</div>
							<div className="partner-grid-img me-auto">
								<div className="gallery-picture  p-3">
									<img
										src={click}
										alt=""
										width="100px"
										className="img-fluid gallery"
									/>
								</div>
							</div>
						</div>
						<div className="partner-grid-2 mb-5 mx-auto" data-aos="fade-up">
							<div className="partner-grid-img ms-lg-auto">
								<div className="gallery-picture  p-3">
									<img
										src={xml}
										alt=""
										width="100px"
										className="img-fluid gallery"
									/>
								</div>
							</div>
							<div className="roadmap-number margin-center  shadow  d-none d-lg-block">
								<img src={two} alt="" className="img-fluid  img-position" />
							</div>
							<div className="text-part ms-lg-auto">
								<div className="products-title mb-3">Competitor analysis</div>

								<div className="d-flex tool-bottom align-items-center mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="product-tick-text mx-3">
										Get daily email notifications in case your products get out
										of stock.
									</div>
								</div>
								<div className="d-flex tool-bottom align-items-center mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="product-tick-text tool-tick-text mx-3">
										Keep daily records of in-stock, out stock, online
										availability and much more
									</div>
								</div>
							</div>
						</div>
						<div className="partner-grid-1 mb-5" data-aos="fade-up">
							<div className="text-part">
								<div className="products-title mb-3">
									Search term inspection
								</div>

								<div className="d-flex align-items-center tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="product-tick-text mx-3">
										Comparing every minute detail of your product and
										competitors product
									</div>
								</div>
								<div className="d-flex align-items-center tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="product-tick-text mx-3">
										Your price/competitor price
									</div>
								</div>
								<div className="d-flex align-items-center tool-bottom mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="product-tick-text mx-3">
										Your a+ status/ competitor a+ status
									</div>
								</div>
								<div className="d-flex tool-bottom align-items-center mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="product-tick-text mx-3">
										Your page rating/ competitor page rating
									</div>
								</div>
								<div className="d-flex tool-bottom align-items-center mt-3">
									<div className="img-tick">
										<img src={tick} width="20px" alt="" />
									</div>
									<div className="product-tick-text mx-3">
										Find out the top 10 ranked products of your category
									</div>
								</div>
							</div>
							<div className="roadmap-number shadow  d-none d-lg-block">
								<img src={three} className="img-fluid img-position" alt="" />
							</div>
							<div className="partner-grid-img me-auto">
								<div className="gallery-picture  p-3">
									<img
										src={analyse}
										alt=""
										width="100px"
										className="img-fluid gallery"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* mobile screen device  */}
				<div className=" d-lg-none d-block">
					<div className="position-line-m">
						<img src={vline} alt="" className="img-fluid vposition-m" />
					</div>
					<div className="partner-roadmap mb-5">
						<div className=" mb-5 mx-auto" data-aos="fade-up">
							<div className="d-flex">
								<div className="roadmap-number-m me-5  shadow">
									<img src={one} alt="" width="15px" className="img-position" />
								</div>
								<div className="text-part ms-3">
									<div className="gallery-picture mb-4 p-5">
										<img
											src={click}
											alt=""
											width="45px"
											className="img-fluid gallery"
										/>
									</div>

									<div className="products-title mb-3">
										All of your product history <br /> one click away.
									</div>

									<div className="d-flex align-items-center tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="product-tick-text mx-3">
											Distribution of Latest Page Ratings
										</div>
									</div>
									<div className="d-flex align-items-center tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="product-tick-text mx-3">
											Bestseller rank
										</div>
									</div>
									<div className="d-flex align-items-center tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="product-tick-text mx-3">
											Image count, videos count, bullet counts, title length,
											description length. (All in one place)
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className=" mb-5 mx-auto" data-aos="fade-up">
							<div className="d-flex">
								<div className="roadmap-number-m me-5 shadow">
									<img src={two} alt="" width="15px" className="img-position" />
								</div>
								<div className="text-part ms-3">
									<div className="gallery-picture mb-4 p-5">
										<img
											src={xml}
											alt=""
											width="45px"
											className="img-fluid gallery"
										/>
									</div>

									<div className="products-title mb-3">Competitor analysis</div>

									<div className="d-flex align-items-center tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="product-tick-text mx-3">
											Get daily email notifications in case your products get
											out of stock.
										</div>
									</div>
									<div className="d-flex align-items-center tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="product-tick-text mx-3">
											Keep daily records of in-stock, out stock, online
											availability and much more
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="mb-5" data-aos="fade-up">
							<div className="d-flex">
								<div className="roadmap-number-m me-5 shadow">
									<img
										src={three}
										alt=""
										width="15px"
										className="img-position"
									/>
								</div>
								<div className="text-part ms-3">
									<div className="gallery-picture mb-4 p-5">
										<img
											src={analyse}
											alt=""
											width="45px"
											className="img-fluid gallery"
										/>
									</div>

									<div className="products-title mb-3">
										Search term inspection
									</div>

									<div className="d-flex align-items-center tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="product-tick-text mx-3">
											Comparing every minute detail of your product and
											competitors product
										</div>
									</div>
									<div className="d-flex align-items-center tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="product-tick-text mx-3">
											Your price/competitor price
										</div>
									</div>
									<div className="d-flex align-items-center tool-bottom mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="product-tick-text mx-3">
											Your a+ status/ competitor a+ status
										</div>
									</div>
									<div className="d-flex tool-bottom align-items-center mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="product-tick-text mx-3">
											Your page rating/ competitor page rating
										</div>
									</div>
									<div className="d-flex tool-bottom align-items-center mt-3">
										<div className="img-tick">
											<img src={tick} width="20px" alt="" />
										</div>
										<div className="product-tick-text mx-3">
											Find out the top 10 ranked products of your category
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partner;
