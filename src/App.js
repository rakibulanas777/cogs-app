import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Component/Shared/Navbar/Navbar";
import Home from "./Component/Landingpage/Home";
import Header from "./Component/Home/Header";
import Products from "./Component/Products/Products";
import Blog from "./Component/Blog/Blog";

import PricingPage from "./Component/Pricing/Pricing";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/home">
						<Header />
					</Route>
					<Route exact path="/product">
						<Products />
					</Route>
					<Route exact path="/pricing">
						<PricingPage />
					</Route>
					<Route exact path="/resources">
						<Products />
					</Route>
					<Route path="/blog">
						<Blog />
					</Route>
					<Route path="/about">
						<Blog />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
