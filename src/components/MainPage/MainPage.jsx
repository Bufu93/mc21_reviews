import styled from 'styled-components';

function MainPage() {
	return (
		<StyledMainPage>
			<h3>Вам понравилось обслуживание в XXI век?</h3>
		</StyledMainPage>
	);
}

const StyledMainPage = styled.div`
	max-width: 436px;
	h3 {
		color: rgb(0, 117, 172);
		font-size: 24px;
		font-weight: 700;
		line-height: 135%;
		text-align: center;
		margin-bottom: 56px;
	}
`;

export default MainPage;
