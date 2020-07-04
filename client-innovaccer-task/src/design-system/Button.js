import styled from "styled-components";

const Button = styled.button`
	font-weight: 600;
	padding: 4px 32px;
	font-family: "Montserrat";
	/* width: 100%; */
	border-radius: 8px;
	min-height: 40px;
	background: ${props => {
		switch (props.bg) {
			case "red":
				return "#DB4437";
			case "blue":
				return "#1A73E8";
			case "green":
				return "#0F9D58";
			case "yellow":
				return "#F4B400";
			case "dark":
				return "#222222";
			case "transparent":
				return "transparent";
			default:
				return "#d5d5d5";
		}
	}};
	border: none;
	font-size: ${({ size }) => {
		return size === "small" ? "14px" : "16px";
	}};
	color: #fff;
	box-shadow: ${({ shadow }) => {
		return shadow === "none"
			? 0
			: "0 1px 2px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.2)";
	}};
	${({ type }) => {
		return type === "transparent"
			? "box-shadow: none; color: #424242;"
			: null;
	}};
`;

export default Button;
