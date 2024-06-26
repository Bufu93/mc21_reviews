/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { ButtonPrimary } from '../styles/Buttons.styled';

function MainPage({ setPage, typo }) {
	return (
		<StyledMainPage>
			{typo?.title ? <h3>{typo?.title}</h3> : ''}
			<StyledMainPageButtonsWrapper>
				<ButtonPrimary onClick={() => setPage('links')}>Да, все здорово</ButtonPrimary>
				<ButtonPrimary
					onClick={() => setPage('form')}
					$color="#ED5736"
					$bg="#FFFFFF"
					$borderColor="#ED5736"
					$HColor="#FFFFFF"
					$HBg="#ED5736"
				>
					Нет, есть вопросы
				</ButtonPrimary>
			</StyledMainPageButtonsWrapper>
		</StyledMainPage>
	);
}

export const StyledMainPageButtonsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	max-width: 232px;
	@media (max-width: 768px) {
		gap: 24px;
	}
`;

const StyledMainPage = styled.div`
	max-width: 436px;
	display: flex;
	flex-direction: column;
	align-items: center;
	h3 {
		color: rgb(0, 117, 172);
		font-size: 24px;
		font-weight: 700;
		line-height: 135%;
		text-align: center;
		margin-bottom: 56px;
		@media (max-width: 768px) {
			font-size: 22px;
			margin-botoom: 48px;
		}
	}
`;

export default MainPage;
