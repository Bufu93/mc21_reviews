import { FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { DateField } from '@mui/x-date-pickers';
import { useState } from 'react';
import ReactInputMask from 'react-input-mask';
import styled from 'styled-components';
import { ButtonPrimary } from '../styles/Buttons.styled';

function MCReviewsPage() {
	const [inputsValue, setInputsValue] = useState({
		radio: 'y',
		text: '',
		date: null,
		fio: '',
		phone: '',
	});
	const [formErrors, setFormErrors] = useState({
		fio: null,
		phone: null,
		date: null,
		text: null,
	});

	const handleRadioChange = (event) => {
		setInputsValue((prev) => ({ ...prev, radio: event.target.value }));
	};
	const handleTextAreaChange = (event) => {
		setInputsValue((prev) => ({ ...prev, text: event.target.value }));
	};
	const handlePhoneChange = (event) => {
		setInputsValue((prev) => ({ ...prev, phone: event.target.value }));
	};
	const handleFIOChange = (event) => {
		setInputsValue((prev) => ({ ...prev, fio: event.target.value }));
	};
	const handleDateChange = (value) => {
		setInputsValue((prev) => ({ ...prev, date: value }));
	};

	console.log(inputsValue);
	return (
		<StyledMCReviewsPage>
			<h3>Написать в службу поддержки</h3>
			<p>
				Расскажите, что вам не понравилось и что мы можем делать лучше. Администратор клиники, свяжется с вами и предложит
				решение проблемы.
			</p>
			<StyledForm>
				<TextField onChange={handleFIOChange} value={inputsValue.fio} label="ФИО пациента" variant="outlined" />
				<small>{formErrors?.fio ? formErrors?.fio : ''}</small>
				<DateField
					label="Дата рождения"
					format="DD.MM.YYYY"
					onChange={handleDateChange}
					value={inputsValue.date}
					onError={(e) => setFormErrors((prev) => ({ ...prev, date: e }))}
				/>
				<small>{formErrors?.date ? formErrors?.date : ''}</small>
				<ReactInputMask onChange={handlePhoneChange} value={inputsValue.phone} mask="+7 (999) 999-99-99" maskChar="">
					{() => <TextField label="Номер телефона" variant="outlined" />}
				</ReactInputMask>
				<small>{formErrors?.phone ? formErrors?.phone : ''}</small>
				<TextField
					onChange={handleTextAreaChange}
					value={inputsValue.text}
					label="Напишите, что вам не понравилось"
					rows={5}
					multiline
				/>
				<small>{formErrors?.text ? formErrors?.text : ''}</small>
				<RadioWrapper>
					<FormLabel>Требуется обратная связь?</FormLabel>
					<RadioGroup onChange={handleRadioChange} value={inputsValue.radio} row>
						<FormControlLabel value={'y'} control={<Radio />} label="Да" />
						<FormControlLabel value={'n'} control={<Radio />} label="Нет" />
					</RadioGroup>
				</RadioWrapper>
				<ButtonPrimary>Отправить</ButtonPrimary>
			</StyledForm>
		</StyledMCReviewsPage>
	);
}

export default MCReviewsPage;

const RadioWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 24px;
`;

const StyledForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	small {
		text-align: right;
		color: red;
		font-size: 12px;
		font-weight: 400;
		line-height: 160%;
		height: 18px;
	}
`;

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
