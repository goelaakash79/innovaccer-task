import React from "react";

const BasicInfo = ({ data }) => {
	return (
		<div className="basic-info-section">
			<div className="row">
				<div className="col-md-6">
					<h1 className="portfolio-name mb-4">
						Hey {"👋"}!<br /> I'm{" "}
						<span className="text-highlight">
							{data && data.name.split(" ")[0]}
						</span>
						.
					</h1>
					<br />
					<p className="mb-4">{data && data.tagline}</p>
					<a href={data && data.resume} className="button">
						Resume
					</a>
				</div>
				<div className="col-md-1"></div>
				<div className="col-md-5 text-center">
					<img
						src="prime.svg"
						width="100%"
						alt="this is an svg illustration"
						className="front-image-responsive"
					/>
				</div>
			</div>
		</div>
	);
};

export default BasicInfo;
