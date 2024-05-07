const BASE_URL = '/app/ajax/form/reviews.php';

const fireCaptcha = () => {
	// return new Promise((resolve) => resolve(''));
	return new Promise((resolve) => {
		window.grecaptcha.ready(function () {
			window.grecaptcha
				.execute('6LdDp8gaAAAAAGwy86x68-rkIgkHVfLQcK1_Xy1x', {
					action: 'reviews',
				})
				.then(function (token) {
					resolve(token);
				});
		});
	});
};

// export const fetchReviews = async (obj) => {
// 	let result = null;
// 	try {
// 		fireCaptcha().then(async (token) => {
// 			const response = await fetch(BASE_URL, {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 				},
// 				body: JSON.stringify({ ...obj, token: token }),
// 			});

// 			if (!response.ok) {
// 				throw new Error('Network response was not ok');
// 			}
// 			console.log(response);
// 			result = response;
// 		});
// 		console.log(result);

// 		return result;
// 	} catch (error) {
// 		console.log('There was a problem with the fetch operation:', error);
// 	}
// };

export const fetchReviews = async (obj) => {
	try {
		const token = await fireCaptcha();
		const response = await fetch(BASE_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ...obj, token: token }),
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.log('There was a problem with the fetch operation:', error);
	}
};
