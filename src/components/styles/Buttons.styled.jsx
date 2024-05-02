import styled from 'styled-components';

export const ButtonPrimary = styled.button`
	cursor: pointer;
	padding: 13px 24px 13px;
	display: inline-flex;
	width: 100%;
	-webkit-box-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	font-size: 15px;
	font-weight: 600;
	text-decoration: none;
	text-align: center;
	background: ${({ $type }) => ($type === 'primary' ? '#82bf31' : $type === 'third' ? '#fff' : $type === 'fourth' ? '#B00000' : '#FF9211')};
	color: ${({ $type }) => ($type === 'third' ? '#82bf31' : '#fff')};
	border: 2px solid ${({ $type }) => ($type === 'secondary' ? '#FF9211' : $type === 'fourth' ? '#B00000' : '#82bf31')};
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
	outline: none;
	transition: color 300ms ease, background-color 300ms ease, border-color 300ms ease;

	/* @media (max-width: 768px) {
        min-width: 290px;
    } */
	&:hover,
	&:active,
	&:focus {
		color: ${({ $type }) => ($type === 'third' ? '#fff' : '#172945')};
		background-color: ${({ $type }) => ($type === 'third' ? '#82bf31' : '#fff')};
	}
`;
