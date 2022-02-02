import React from "react";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Shared from "../Shared/Shared";
import "./Products.css";
const Products = () => {
	return (
		<div className="products">
			<Navbar />
			<div className="container">
				<Shared />
			</div>
			<Footer />
		</div>
	);
};

export default Products;
