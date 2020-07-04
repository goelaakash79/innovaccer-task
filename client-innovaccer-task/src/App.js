import React from "react";

// const Header = React.lazy(() => import("./components/Header.js"));
import Button from "./design-system/Button";
import Container from "./design-system/Container";

function App() {
	return (
		<React.Suspense
			fallback={
				<div className="flex justify-center items-center h-screen">
					<h1 className="font-serif text-4xl bold font-bold text-gray-700">
						Loading ...
					</h1>
				</div>
			}
		>
			<Container>
				<Button bg="red">Click me</Button>
			</Container>
		</React.Suspense>
	);
}

export default App;
