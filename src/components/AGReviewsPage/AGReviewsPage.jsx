/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { StyledMainPageButtonsWrapper } from '../MainPage/MainPage';
import { LinkPrimary } from '../styles/Buttons.styled';
import yaIcon from '../../assets/ya.svg';
import gisIcon from '../../assets/gis.svg';

function AGReviewsPage({ place, typo }) {
	console.log(typo);
	return (
		<StyledAGReviewsPage>
			{typo?.title ? <h3>{typo?.title}</h3> : ''}
			{typo?.description ? <p>{typo?.description}</p> : ''}
			<StyledMainPageButtonsWrapper>
				<LinkPrimary
					rel="noopener noreferrer"
					$bg="#FFFFFF"
					$color="#172945"
					$HColor="#FFFFFF"
					$HBg="#82bf31"
					href={place.yaLink}
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
					href={place.gisLink}
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
		@media (max-width: 768px) {
			font-size: 22px;
		}
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
		@media (max-width: 768px) {
			font-size: 15px;
			margin-bottom: 48px;
		}
	}
`;
