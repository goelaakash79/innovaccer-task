import React from "react";

const BasicInfo = () => {
	return (
		<div className="basic-info-section">
			<div className="row">
				<div className="col-md-6">
					<h1 className="portfolio-name mb-4">
						Hey {"👋"}, I'm{" "}
						<span className="text-highlight">Aakash</span>
					</h1>
					<p>
						I am frontend developer, who can code on server-side and
						design. Currently, I'm looking for work.
					</p>
					<button className="button mt-2">Resume</button>
				</div>
				{/* <div className="col-md-1"></div> */}
				<div className="col-md-6">
					<div className="tiles-section">
						<div className="tile">blog</div> {"💻"}
						<div className="tile">designs</div> {"💻"}
						<div className="tile">work</div> {"💻"}
						<div className="tile">projects</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BasicInfo;
