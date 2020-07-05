export const baseurl =
	process.env.NODE_ENV === "production"
		? "https://innovaccertask.herokuapp.com/api/v1"
		: "http://localhost:8000/api/v1";
