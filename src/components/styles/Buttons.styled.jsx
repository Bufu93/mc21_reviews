import styled from 'styled-components';

export const ButtonPrimary = styled.button`
	cursor: pointer;
	padding: 13px 24px 13px;
	display: flex;
	width: 100%;
	max-width: 227px;
	-webkit-box-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	font-size: 15px;
	font-weight: 600;
	text-decoration: none;
	text-align: center;
	background: ${({ $bg = '#82bf31' }) => $bg};
	color: ${({ $color = '#fff' }) => $color};
	border: 2px solid ${({ $borderColor = '#82bf31' }) => $borderColor};
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
	outline: none;
	transition: color 300ms ease, background-color 300ms ease, border-color 300ms ease;

	/* @media (max-width: 768px) {
        min-width: 290px;
    } */
	&:hover,
	&:active,
	&:focus {
		color: ${({ $HColor = '#172945' }) => $HColor};
		background-color: ${({ $HBg = '#fff' }) => $HBg};
	}
`;

export const LinkPrimary = styled.button`
	cursor: pointer;
	padding: 13px 24px 13px;
	display: inline-flex;
	width: 100%;
	-webkit-box-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	font-size: 18px;
	font-weight: 600;
	text-decoration: none;
	text-align: center;
	background: ${({ $bg = '#82bf31' }) => $bg};
	color: ${({ $color = '#fff' }) => $color};
	border: 2px solid ${({ $borderColor = '#82bf31' }) => $borderColor};
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
	outline: none;
	transition: color 300ms ease, background-color 300ms ease, border-color 300ms ease;
	max-height: 46px;
	gap: 4px;
	/* @media (max-width: 768px) {
        min-width: 290px;
    } */
	&:hover,
	&:active,
	&:focus {
		color: ${({ $HColor = '#172945' }) => $HColor};
		background-color: ${({ $HBg = '#fff' }) => $HBg};
	}
	img {
		margin: 0 !important;
	}
`;
