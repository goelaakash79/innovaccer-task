import { PORTFOLIO, SEND_EMAIL } from "./routes";
import axios from "axios";
import { baseurl } from "./config";

axios.defaults.baseURL = baseurl;

export const getPortfolio = async () => {
	try {
		const response = await axios.get(PORTFOLIO);
		if (response.status === 200 && response.data.error === false) {
			return response.data;
		} else return response.data;
	} catch (err) {
		return err.response.data;
	}
};

export const sendEmail = async data => {
	try {
		const response = await axios.post(SEND_EMAIL, data);
		if (response.status === 200 && response.data.error === false) {
			return response.data;
		} else return response.data;
	} catch (err) {
		return err.response.data;
	}
};
