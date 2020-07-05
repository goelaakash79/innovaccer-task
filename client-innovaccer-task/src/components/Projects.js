import React from "react";

const Projects = ({ data }) => {
	return (
		<div className="pro-section">
			<h3 className="section-heading">Projects</h3>
			<div className="row mt-4">
				{data &&
					data.map(pr => {
						return (
							<div className="col-lg-4 mb-4">
								<div className="card">
									<div
										style={{
											height: "200px",
											backgroundImage: `url(${pr.image})`,
											backgroundRepeat: "no-repeat",
											backgroundSize: "cover",
											marginBottom: 12,
											borderRadius: 8,
											border: "0.2px solid rgba(0,0,0,.1)"
										}}
									></div>
									<p>{pr.desc}</p>
									<a href={pr.link}>Check it out</a>
								</div>
							</div>
						);
					})}
			</div>
			<a href="https://github.com/goelaakash79">View more {">>"}</a>
		</div>
	);
};

export default Projects;
