import styled from 'styled-components';
import { ButtonPrimary } from '../styles/Buttons.styled';

function Footer() {
	return (
		<StyledFooter>
			<p>
				Группа компаний
				<br /> Медицинский центр «XXI век»
				<br /> @ 2024
			</p>
			<ButtonPrimary
				as="a"
				href="https://mc21.ru"
				rel="noopener noreferrer"
				$bg="#FFFFFF"
				$color="#172945"
				$HColor="#FFFFFF"
				$HBg="#82bf31"
			>
				Перейти на сайт
			</ButtonPrimary>
			<StyledLink href="https://mc21.ru" rel="noopener noreferrer">
				Соглашение на обработку персональных данных
			</StyledLink>
		</StyledFooter>
	);
}

export default Footer;

const StyledFooter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 227px;
	width: 100%;
	text-align: center;
	gap: 24px;
	margin-top: 56px;
	p {
		font-size: 14px;
		font-weight: 400;
		line-height: 120%;
		letter-spacing: 0%;
		text-align: center;
		color: #172945;
	}
`;

const StyledLink = styled.a`
	color: rgb(23, 41, 69);
	font-size: 14px;
	font-weight: 400;
	line-height: 120%;
	letter-spacing: 0%;
	text-align: center;
	text-decoration-line: underline;
`;
