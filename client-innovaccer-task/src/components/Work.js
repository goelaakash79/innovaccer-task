import React, { useState } from "react";
import ReactModal from "react-modal";

const Work = ({ data }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [dt, setDt] = useState({});

	ReactModal.defaultStyles.content.width = 400;
	ReactModal.defaultStyles.content.height = 400;

	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			borderRadius: "8px",
			border: "none",
			boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
		}
	};

	return (
		<div className="col-md-6">
			<h3 className="section-heading">Work Experiences</h3>
			<ul className="mt-4">
				{data &&
					data.map(work => {
						return (
							<li
								className="card"
								key={work.company}
								onClick={() => {
									setIsOpen(true);
									setDt(work);
								}}
							>
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
			<ReactModal
				style={customStyles}
				isOpen={isOpen}
				onRequestClose={() => setIsOpen(false)}
				shouldCloseOnOverlayClick={true}
				contentLabel="Minimal Modal Example"
			>
				<button
					className="button"
					onClick={() => setIsOpen(false)}
					style={{ right: 0 }}
				>
					close
				</button>
				<hr />
				<h4>{dt.role}</h4>
				<p>
					<span className="tag">
						{dt.company} - {dt.location}
					</span>
				</p>
				<p>{dt.more}</p>
				<p className="description">Duration: {dt.time}</p>
			</ReactModal>
		</div>
	);
};

export default Work;
