import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import logo from './assets/logo.svg';
import MainPage from './components/MainPage/MainPage';

function App() {
	const params = useParams();

	console.log(params);
	return (
		<StyledApp>
			<img src={logo} alt="logo" />
			<MainPage />
		</StyledApp>
	);
}
const StyledApp = styled.div`
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
