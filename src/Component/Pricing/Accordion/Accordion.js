import React, { useState } from "react";
import { questions } from "./api";
import MyAccordion from "./MyAccordion";
const Accordion = () => {
	const [data, setData] = useState(questions);
	return (
		<div className="accordion p-4">
			<div className="container">
				<div className="col-11 mx-auto">
					{data.map((curElem) => {
						return <MyAccordion key={curElem.id} element={curElem} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Accordion;
