import React, { useState } from "react";
import "./Accordion.css";
const MyAccordion = ({ element }) => {
	const { question, answer } = element;
	const [show, setShow] = useState(false);
	return (
		<div className="section mb-2 p-2">
			<div className="answer-qestion mb-2 p-3">
				<div
					className="question-flex mb-3 d-flex justify-content-between align-items-center"
					onClick={() => setShow(!show)}
				>
					<div className="question">{question}</div>
					{show ? <i class="fas fa-minus"></i> : <i class="fas fa-plus"></i>}
				</div>
				{show && <p className="ans">{answer}</p>}
			</div>
		</div>
	);
};

export default MyAccordion;
