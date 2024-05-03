import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ru from 'dayjs/locale/ru';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ruRU } from '@mui/x-date-pickers/locales';

const theme = createTheme(
	{
		palette: {
			primary: { main: '#82bf31' },
		},
	},
	ruRU // x-date-pickers translations
);

const router = createBrowserRouter([
	{
		path: '/:id',
		element: <App />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<ThemeProvider theme={theme}>
		<LocalizationProvider dateAdapter={AdapterDayjs} locale={ru}>
			<RouterProvider router={router} />
		</LocalizationProvider>
	</ThemeProvider>
);
