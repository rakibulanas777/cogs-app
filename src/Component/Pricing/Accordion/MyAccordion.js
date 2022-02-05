import React from "react";
import "./Accordion.css";
const MyAccordion = ({ element }) => {
	const { question, answer } = element;
	return (
		<div className="section mb-2 p-2">
			<div className="answer-qestion shadow mb-2 p-3">
				<h2>{question}</h2>
			</div>
			<p>{answer}</p>
		</div>
	);
};

export default MyAccordion;
