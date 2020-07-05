import React from "react";

const Work = ({ data }) => {
	return (
		<div className="col-md-6">
			<h3 className="section-heading">Work Experiences</h3>
			<ul className="mt-4">
				{data &&
					data.map(work => {
						return (
							<li className="card" key={work.company}>
								<h5>{work.role}</h5>
								<p>
									<span className="tag">
										{work.company} - {work.location}
									</span>
								</p>
								<p className="description">{work.desc}</p>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default Work;
