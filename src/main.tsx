import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './assets/style/main.css';
import { ItemsProvider } from './context/ItemsContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<HashRouter>
			<ItemsProvider>
				<App />
			</ItemsProvider>
		</HashRouter>
	</React.StrictMode>,
);
