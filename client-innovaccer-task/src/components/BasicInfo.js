import React from "react";

const BasicInfo = ({ data }) => {
	return (
		<div className="basic-info-section">
			<div className="row">
				<div className="col-md-6">
					<h1 className="portfolio-name mb-4">
						Hey {"👋"}, I'm{" "}
						<span className="text-highlight">
							{data && data.name.split(" ")[0]}
						</span>
						.
					</h1>
					<br />
					<p className="mb-4">{data && data.tagline}</p>
					{/* <br /> */}
					<a href={data && data.resume} className="button">
						Resume
					</a>
				</div>
				{/* <div className="col-md-1"></div> */}
				<div className="col-md-6 text-center">
					<img src="prime.svg" width="64%" />
				</div>
			</div>
		</div>
	);
};

export default BasicInfo;
