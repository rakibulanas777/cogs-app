import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import bolg from "../../Images/Rectangle 6221.png";
import user from "../../Images/Ellipse 1002.png";
import computer from "../../Images/Rectangle 6221 (1).png";
import computer1 from "../../Images/Rectangle 6221 (2).png";
import computer2 from "../../Images/Rectangle 6221 (3).png";
import "./carosoul.css";

export default class Clatest extends Component {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}
	next() {
		this.slider.slickNext();
	}
	previous() {
		this.slider.slickPrev();
	}
	render() {
		var settings = {
			dots: false,
			infinite: false,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 4,
			initialSlide: 0,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 3,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};
		return (
			<div className="d-lg-none">
				<Slider ref={(c) => (this.slider = c)} {...settings} data-aos="zoom-in">
					{/* testimonial 1 */}
					<div
						className="grid-box-slider carousel-item active p-2"
						data-aos="zoom-in-up"
					>
						<div className="top-part mb-4 d-flex justify-content-between  align-items-center">
							<div className="blog-img">
								<img src={bolg} alt="" className="img-fluid" />
							</div>
						</div>
						<div className="bottom-title mb-3">
							7 Steps To An Effective Marketing Strategy
						</div>
						<div className="blog-owner align-items-center d-flex mb-3">
							<div className="user me-3">
								<img src={user} alt="" className="img-fluid" />
							</div>
							<div className="extra-text d-flex">
								<span>Adrian Harris</span>
								<span>|</span>
								<span>Nov 5, 2018</span>
							</div>
						</div>
						<div className="bottom-deatils mb-3">
							There are many variations of passages of Lorem Ipsum available,
							but the majority have ....
						</div>
					</div>
					{/* testimonial 2 */}
					<div
						className="grid-box-slider carousel-item active p-2"
						data-aos="zoom-in-up"
					>
						<div className="top-part mb-4 d-flex justify-content-between  align-items-center">
							<div className="blog-img">
								<img src={computer} alt="" className="img-fluid" />
							</div>
						</div>
						<div className="bottom-title mb-3">
							7 Steps To An Effective Marketing Strategy
						</div>
						<div className="blog-owner align-items-center d-flex mb-3">
							<div className="user me-3">
								<img src={user} alt="" className="img-fluid" />
							</div>
							<div className="extra-text d-flex">
								<span>Adrian Harris</span>
								<span>|</span>
								<span>Nov 5, 2018</span>
							</div>
						</div>
						<div className="bottom-deatils mb-3">
							There are many variations of passages of Lorem Ipsum available,
							but the majority have ....
						</div>
					</div>
				</Slider>
				<div className="text-center mt-5 mb-5 d-lg-none">
					<button className="button-pev shadow me-3" onClick={this.previous}>
						<i class="fas fa-angle-left"></i>
					</button>
					<button className="button-next shadow" onClick={this.next}>
						<i class="fas fa-angle-right"></i>
					</button>
				</div>
			</div>
		);
	}
}
