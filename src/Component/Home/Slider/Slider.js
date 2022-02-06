import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import user from "../../Images/unsplash_ZHvM3XIOHoE.png";
import quote from "../../Images/Vector (4).png";
function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				width: "50px",
				height: "50px",
				color: "white",
			}}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "green" }}
			onClick={onClick}
		/>
	);
}

export default class CustomArrows extends Component {
	render() {
		const settings = {
			dots: true,
			arrows: false,
			infinite: true,

			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
		};
		return (
			<div className="container mt-5 mb-5" data-aos="zoom-in">
				<div className="slider-book text-center">
					What they are saying about us
				</div>

				<Slider {...settings}>
					<div className="slider-part mt-5 mb-5 p-5">
						<div className="slider-user text-center mb-4">
							<img src={user} className="img-fluid mx-auto " alt="" />
						</div>
						<div className="quote text-center mb-4">
							<img src={quote} className="img-fluid mx-auto " alt="" />
						</div>
						<div className="quote-deatails text-center mb-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. At turpis
							lacus, mi elementum. Pulvinar dui sagittis dignissim sit tincidunt
							scelerisque tempor augue sed. Nisl ullamcorper mi aenean facilisis
							amet sit in tempor. Eu quam ornare sed{" "}
						</div>
						<div className="quote-name text-center">John Doe , CEO</div>
					</div>
					<div className="slider-part mt-5 mb-5 p-5">
						<div className="slider-user text-center mb-4">
							<img src={user} className="img-fluid mx-auto " alt="" />
						</div>
						<div className="quote text-center mb-4">
							<img src={quote} className="img-fluid mx-auto " alt="" />
						</div>
						<div className="quote-deatails text-center mb-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. At turpis
							lacus, mi elementum. Pulvinar dui sagittis dignissim sit tincidunt
							scelerisque tempor augue sed. Nisl ullamcorper mi aenean facilisis
							amet sit in tempor. Eu quam ornare sed{" "}
						</div>
						<div className="quote-name text-center">John Doe , CEO</div>
					</div>
				</Slider>
			</div>
		);
	}
}
