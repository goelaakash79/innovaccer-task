import React from "react";

const Education = ({ data }) => {
	return (
		<div className="col-md-6">
			<h3 className="section-heading">Education</h3>
			<ul className="mt-4">
				{data &&
					data.map(edu => {
						return (
							<li className="card" key={edu.course}>
								<h5>
									{edu.course} - {edu.stream}
								</h5>
								<p>
									<span className="tag">
										{edu.score} | {edu.batch}
									</span>
								</p>
								<p className="description">{edu.college}</p>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default Education;
