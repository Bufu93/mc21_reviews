import ReactInputMask from 'react-input-mask';
import styled from 'styled-components';

function MCReviewsPage() {
	const formatChars = {
		n: '[0-1]',
		m: '[0-9]',
		e: '[0-3]',
		d: '[0-9]',
		z: '[1-2]',
		y: '[0-9]',
	};
	return (
		<StyledMCReviewsPage>
			<h3>Написать в службу поддержки</h3>
			<p>
				Расскажите, что вам не понравилось и что мы можем делать лучше. Администратор клиники, свяжется с вами и предложит
				решение проблемы.
			</p>
			<StyledForm>
				<ReactInputMask mask="+7 (999) 999-99-99" maskChar="" />
				<ReactInputMask
					alwaysShowMask={false}
					formatChars={formatChars}
					mask="ed.md.zyyy"
					maskChar={null}
					placeholder={'дд.мм.гггг'}
				/>
			</StyledForm>
		</StyledMCReviewsPage>
	);
}

export default MCReviewsPage;

const StyledForm = styled.form``;

const StyledMCReviewsPage = styled.div`
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
