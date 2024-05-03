import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import logo from './assets/logo.svg';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import MCReviewsPage from './components/MCReviewsPage/MCReviewsPage';
import AGReviewsPage from './components/AGReviewsPage/AGReviewsPage';
import data from '../public/data.json';

function App() {
	const params = useParams();
	const [page, setPage] = useState(null);
	const foundPlace = data.places.find((place) => place.id.toString() === params.id.toString());
	console.log({ foundPlace, params });

	useEffect(() => {
		if (!foundPlace) {
			window.location.replace('https://mc21.ru');
		}
	}, [foundPlace]);

	return (
		<StyledApp>
			<img src={logo} alt="logo" />
			{page === null ? (
				<MainPage typo={data?.mainPage} setPage={setPage} />
			) : page ? (
				<AGReviewsPage typo={data?.linksPage} place={foundPlace} />
			) : (
				<MCReviewsPage typo={data?.formPage} place={foundPlace} />
			)}
			<Footer typo={data?.footer} />
		</StyledApp>
	);
}
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
