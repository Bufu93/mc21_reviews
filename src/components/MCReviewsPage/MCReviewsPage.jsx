/* eslint-disable react/prop-types */
import { FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { DateField } from '@mui/x-date-pickers';
import { useState } from 'react';
import ReactInputMask from 'react-input-mask';
import styled from 'styled-components';
import { ButtonPrimary } from '../styles/Buttons.styled';

function MCReviewsPage({ typo }) {
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

	const allFieldsAreNull = Object.values(formErrors).every((value) => value === null);

	const handleRadioChange = (event) => {
		setInputsValue((prev) => ({ ...prev, radio: event.target.value }));
	};
	const handleTextAreaChange = (event) => {
		setInputsValue((prev) => ({ ...prev, text: event.target.value }));
		if (event.target.value.length < 5) {
			setFormErrors((prev) => ({ ...prev, text: 'Минимум 5 символов' }));
		} else {
			setFormErrors((prev) => ({ ...prev, text: null }));
		}
	};
	const handlePhoneChange = (event) => {
		setInputsValue((prev) => ({ ...prev, phone: event.target.value }));
		if (event.target.value.length !== 18) {
			setFormErrors((prev) => ({ ...prev, phone: 'Неверно введен номер телефона' }));
		} else {
			setFormErrors((prev) => ({ ...prev, phone: null }));
		}
	};
	const handleFIOChange = (event) => {
		const russianLettersSpacesHyphensRegex = /^[а-яёА-ЯЁ\s-]*$/;

		if (event.target.value && !russianLettersSpacesHyphensRegex.test(event.target.value)) {
			setFormErrors((prev) => ({ ...prev, fio: 'Только русские буквы разрешены' }));
		} else {
			setFormErrors((prev) => ({ ...prev, fio: null }));
		}
		setInputsValue((prev) => ({ ...prev, fio: event.target.value }));
	};
	const handleDateChange = (value) => {
		setInputsValue((prev) => ({ ...prev, date: value }));
	};

	console.log(formErrors);
	return (
		<StyledMCReviewsPage>
			{typo?.title ? <h3>{typo?.title}</h3> : ''}
			{typo?.description ? <p>{typo?.description}</p> : ''}
			<StyledForm>
				<TextField
					error={!!formErrors?.fio}
					onChange={handleFIOChange}
					value={inputsValue.fio}
					label="ФИО пациента"
					variant="outlined"
				/>
				<small>{formErrors?.fio ? formErrors?.fio : ''}</small>
				<DateField
					label="Дата рождения"
					format="DD.MM.YYYY"
					onChange={handleDateChange}
					value={inputsValue.date}
					onError={(e) => setFormErrors((prev) => ({ ...prev, date: e }))}
				/>
				<small>{formErrors?.date ? 'Неверная дата рождения' : ''}</small>
				<ReactInputMask onChange={handlePhoneChange} value={inputsValue.phone} mask="+7 (999) 999-99-99" maskChar="">
					{() => <TextField error={!!formErrors?.phone} label="Номер телефона" variant="outlined" />}
				</ReactInputMask>
				<small>{formErrors?.phone ? formErrors?.phone : ''}</small>
				<TextField
					onChange={handleTextAreaChange}
					value={inputsValue.text}
					label="Напишите, что вам не понравилось"
					rows={5}
					multiline
					error={!!formErrors?.text}
				/>
				<small>{formErrors?.text ? formErrors?.text : ''}</small>
				<RadioWrapper>
					<FormLabel>Требуется обратная связь?</FormLabel>
					<RadioGroup onChange={handleRadioChange} value={inputsValue.radio} row>
						<FormControlLabel value={'y'} control={<Radio />} label="Да" />
						<FormControlLabel value={'n'} control={<Radio />} label="Нет" />
					</RadioGroup>
				</RadioWrapper>
				<ButtonPrimary disabled={allFieldsAreNull ? false : true}>Отправить</ButtonPrimary>
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
	max-width: 343px;
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
