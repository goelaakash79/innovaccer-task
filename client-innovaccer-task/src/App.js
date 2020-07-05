import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const BasicInfo = React.lazy(() => import("./components/BasicInfo"));
const Work = React.lazy(() => import("./components/Work"));
const Education = React.lazy(() => import("./components/Education"));
const Blog = React.lazy(() => import("./components/Blog"));
const Achievements = React.lazy(() => import("./components/Achievements"));
const Contact = React.lazy(() => import("./components/Contact"));

function App() {
	return (
		<React.Suspense
			fallback={
				<div className="loader-wrapper">
					<h1 className="loader">Loading...</h1>
				</div>
			}
		>
			<div className="container">
				<BasicInfo />
				<div className="row main-section">
					<Work />
					<Education />
				</div>
				<Blog />
				<Achievements />
				<Contact />
			</div>
		</React.Suspense>
	);
}

export default App;
