import styled from 'styled-components';
import { StyledMainPageButtonsWrapper } from '../MainPage/MainPage';
import { LinkPrimary } from '../styles/Buttons.styled';
import yaIcon from '../../assets/ya.svg';
import gisIcon from '../../assets/gis.svg';

function AGReviewsPage() {
	return (
		<StyledAGReviewsPage>
			<h3>Оставьте отзыв о нашей работе</h3>
			<p>Обычно люди не находят времени оставить отзывы, если им всё понравилось. А вы нашли. Мы это ценим.</p>
			<StyledMainPageButtonsWrapper>
				<LinkPrimary
					rel="noopener noreferrer"
					$bg="#FFFFFF"
					$color="#172945"
					$HColor="#FFFFFF"
					$HBg="#82bf31"
					href={`http://yandex.ru`}
				>
					<img src={yaIcon} alt="" />
					Яндекс Карты
				</LinkPrimary>
				<LinkPrimary
					rel="noopener noreferrer"
					$bg="#FFFFFF"
					$color="#172945"
					$HColor="#FFFFFF"
					$HBg="#82bf31"
					href={`http://2gis.ru`}
				>
					<img src={gisIcon} alt="" />
					2ГИС
				</LinkPrimary>
			</StyledMainPageButtonsWrapper>
		</StyledAGReviewsPage>
	);
}

export default AGReviewsPage;

const StyledAGReviewsPage = styled.div`
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
		margin-bottom: 16px;
	}
	p {
		font-size: 16px;
		font-weight: 400;
		line-height: 160%;
		letter-spacing: 0%;
		text-align: center;
		max-width: 416px;
		color: #172945;
		margin-bottom: 56px;
	}
`;
