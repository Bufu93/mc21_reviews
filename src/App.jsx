import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import logo from './assets/logo.svg';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import MCReviewsPage from './components/MCReviewsPage/MCReviewsPage';
import AGReviewsPage from './components/AGReviewsPage/AGReviewsPage';

function App() {
	const params = useParams();
	const [page, setPage] = useState(null);

	console.log(params);
	return (
		<StyledApp>
			<img src={logo} alt="logo" />
			{page === null ? <MainPage setPage={setPage} /> : page ? <AGReviewsPage /> : <MCReviewsPage />}
			<Footer />
		</StyledApp>
	);
}
const StyledApp = styled.div`
	min-width: 320px;
	padding-top: 56px;
	padding-bottom: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		margin-bottom: 72px;
	}
`;

export default App;
