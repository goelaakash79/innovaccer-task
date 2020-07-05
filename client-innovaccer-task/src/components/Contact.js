import React, { useState, useEffect } from "react";
import { sendEmail } from "../utils/services";

const Contact = ({ data, about }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isloading, setIsLoading] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const payload = { email, name, message };
			const res = await sendEmail(payload);

			if (!res.error) {
				setEmail("");
				setName("");
				setMessage("");
				setIsLoading(false);
			}
		} catch (err) {
			setMessage("Error occurred, try again");
			setIsLoading(false);
		}
	};
	return (
		<div className="contact-section">
			<h3 className="section-heading">Let's talk</h3>
			<div className="row mt-4">
				<div className="col-lg-4 mb-4">
					<form onSubmit={handleSubmit}>
						<input
							className="input-email mb-4"
							type="name"
							value={name}
							required
							onChange={({ target }) => setName(target.value)}
							placeholder="enter your name"
						/>
						<input
							className="input-email mb-4"
							type="email"
							required
							value={email}
							onChange={({ target }) => setEmail(target.value)}
							placeholder="enter your email"
						/>
						<textarea
							value={message}
							rows="5"
							className="message mb-4"
							required
							onChange={({ target }) => setMessage(target.value)}
						/>
						<button
							type="submit"
							className="button"
							disabled={isloading ? true : false}
						>
							{isloading ? "Sending" : "Send"}
						</button>
					</form>
				</div>
				<div className="col-lg-2"></div>

				<div className="col-lg-3">
					<a
						href="https://github.com/goelaakash79/innovaccer-task"
						aria-label="link-to-code"
						className="link"
					>
						View source code
					</a>
					<p>
						<a
							href={`mailto:${data && about.email}`}
							aria-label="link-to-code"
							className="link"
						>
							goelaakash79@gmail.com
						</a>
					</p>
					<p className="description">Connect with me</p>
					<div className="social-icons mb-4">
						<a
							href={data && data.twitter}
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								viewBox="0 0 1024 1024"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
							</svg>
						</a>
						<a
							href={data && data.github}
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								viewBox="0 0 1024 1024"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
							</svg>
						</a>{" "}
						<a
							href={data && data.medium}
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								viewBox="0 0 1024 1024"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M834.7 279.8l61.3-58.9V208H683.7L532.4 586.4 360.3 208H137.7v12.9l71.6 86.6c7 6.4 10.6 15.8 9.7 25.2V673c2.2 12.3-1.7 24.8-10.3 33.7L128 805v12.7h228.6v-12.9l-80.6-98a39.99 39.99 0 0 1-11.1-33.7V378.7l200.7 439.2h23.3l172.6-439.2v349.9c0 9.2 0 11.1-6 17.2l-62.1 60.3V819h301.2v-12.9l-59.9-58.9c-5.2-4-7.9-10.7-6.8-17.2V297a18.1 18.1 0 0 1 6.8-17.2z"></path>
							</svg>
						</a>
						<a
							href={data && data.behance}
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								viewBox="0 0 24 24"
								stroke="currentColor"
								fill="currentColor"
								width="22.258px"
							>
								<path d="M12.363 14.947c0-1.848-.879-3.214-2.695-3.726 1.325-.631 2.016-1.587 2.016-3.074 0-2.932-2.192-3.647-4.721-3.647H0v14.721h7.158c2.684 0 5.205-1.283 5.205-4.274zM3.246 7.013h3.046c1.171 0 2.225.328 2.225 1.682 0 1.25-.82 1.753-1.98 1.753H3.246zm-.001 9.708v-4.054h3.538c1.429 0 2.333.594 2.333 2.102 0 1.487-1.079 1.952-2.4 1.952zM18.796 19.5c2.554 0 4.208-1.147 5.004-3.585h-2.592c-.279.91-1.429 1.391-2.321 1.391-1.721 0-2.625-1.005-2.625-2.713h7.713c.244-3.418-1.66-6.331-5.18-6.331-3.259 0-5.471 2.442-5.471 5.641 0 3.32 2.096 5.597 5.472 5.597zm-.092-9.026c1.475 0 2.217.864 2.341 2.277h-4.779c.097-1.401 1.03-2.277 2.438-2.277zM15.667 5.273h5.988v1.45h-5.988z" />
							</svg>
						</a>
						<a
							href={data && data.linkedin}
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								x="0px"
								y="0px"
								stroke="currentColor"
								fill="currentColor"
								width="22.258px"
								height="22.258px"
								viewBox="0 0 22.258 22.258"
								xmlSpace="preserve"
							>
								<path d="M5.366 2.973c0 1.376-1.035 2.479-2.699 2.479h-.031C1.034 5.453 0 4.348 0 2.973 0 1.564 1.067.491 2.698.491 4.331.49 5.336 1.564 5.366 2.973zM.28 21.766h4.772V7.413H.28v14.353zM16.764 7.077c-2.531 0-3.664 1.39-4.301 2.37v.046h-.031a.232.232 0 00.031-.046V7.414H7.692c.062 1.345 0 14.353 0 14.353h4.771v-8.016c0-.432.029-.855.157-1.164.346-.854 1.132-1.747 2.446-1.747 1.729 0 2.42 1.319 2.42 3.247v7.68h4.771v-8.229c.001-4.412-2.355-6.461-5.493-6.461z" />
							</svg>
						</a>
					</div>
					<p className="credits">made on vscode with {"<JS/>"}</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
