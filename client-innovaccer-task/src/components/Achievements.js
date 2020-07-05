import React from "react";

const Achievements = ({ data }) => {
	return (
		<div className="ach-section">
			<h3 className="section-heading">Achievements</h3>
			<ul className="mt-4">
				{data &&
					data.map(ach => {
						return (
							<li className="card" key={ach}>
								<p>
									{"🏅 🏆"} {ach}
								</p>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default Achievements;
