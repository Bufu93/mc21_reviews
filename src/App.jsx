import { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from './assets/logo.svg';
import success from './assets/Vector.svg';
import AGReviewsPage from './components/AGReviewsPage/AGReviewsPage';
import Footer from './components/Footer/Footer';
import MCReviewsPage from './components/MCReviewsPage/MCReviewsPage';
import MainPage from './components/MainPage/MainPage';
import data from '/public/data.json';

function App() {
	const [page, setPage] = useState('main');

	// main, links, form, thx

	const searchParams = new URLSearchParams(window.location.search);
	const paramValue = searchParams.get('ap');
	const foundPlace = data.places.find((place) => place.id?.toString() === paramValue?.toString());
	console.log({ foundPlace, paramValue });

	useEffect(() => {
		if (!foundPlace) {
			window.location.replace('https://mc21.ru');
		}
	}, [foundPlace]);

	return (
		<StyledApp>
			<img src={logo} alt="logo" />
			{page === 'thx' ? (
				<ThxMessage>
					<img src={success} alt="logo" />
					<h3>Ваше сообщение отправлено</h3>
				</ThxMessage>
			) : page === 'links' ? (
				<AGReviewsPage typo={data?.linksPage} place={foundPlace} />
			) : page === 'form' ? (
				<MCReviewsPage typo={data?.formPage} place={foundPlace} setPage={setPage} />
			) : (
				<MainPage typo={data?.mainPage} setPage={setPage} />
			)}
			<Footer typo={data?.footer} />
		</StyledApp>
	);
}

const ThxMessage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	h3 {
		color: rgb(0, 117, 172);
		font-size: 24px;
		font-weight: 700;
		line-height: 135%;
		text-align: center;
		margin-bottom: 16px;
		@media (max-width: 768px) {
			font-size: 20px;
		}
	}
`;

const StyledApp = styled.div`
	min-width: 290px;
	padding-top: 56px;
	padding-bottom: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-left: 16px;
	padding-right: 16px;
	@media (max-width: 768px) {
		padding-top: 32px;
		padding-bottom: 32px;
	}

	& > img {
		margin-bottom: 72px;
		@media (max-width: 768px) {
			width: 92px;
			height: 85px;
			margin-bottom: 48px;
		}
	}
`;

export default App;
