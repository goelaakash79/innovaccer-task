import styled from "styled-components";

const Input = styled.input`
	border: 1px solid #424242;
	border-bottom-width: 2.4px;
	&:active,
	&:focus {
		border-color: #424242;
		border-right-width: 2.4px;
		border-bottom-width: 3.6px;
		box-shadow: 0 0 0 0.2rem rgba(219, 68, 55, 0.25);
	}
`;

export default Input;
