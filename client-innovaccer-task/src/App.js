import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getPortfolio } from "./utils/services";

const BasicInfo = React.lazy(() => import("./components/BasicInfo"));
const Work = React.lazy(() => import("./components/Work"));
const Education = React.lazy(() => import("./components/Education"));
const Blog = React.lazy(() => import("./components/Blog"));
const Achievements = React.lazy(() => import("./components/Achievements"));
const Contact = React.lazy(() => import("./components/Contact"));
const Projects = React.lazy(() => import("./components/Projects"));

const App = () => {
	const [data, setData] = useState({});
	useEffect(() => {
		(async () => {
			const res = await getPortfolio();
			setData(res.data);
		})();
	}, []);

	return (
		<React.Suspense
			fallback={
				<div className="loader-wrapper">
					<h1 className="loader text-center">
						{" "}
						<img src="loading.svg" style={{ width: 100 }} alt="" />
						loading...
					</h1>
				</div>
			}
		>
			<div className="container">
				<BasicInfo data={data.about} />
				<div className="row main-section">
					<Work data={data.work} />
					<Education data={data.education} />
				</div>
				<Projects data={data.projects} />
				<Blog data={data.blogs} />
				<Achievements data={data.achievements} />
				<Contact data={data.social} about={data.about} />
			</div>
		</React.Suspense>
	);
};

export default App;
