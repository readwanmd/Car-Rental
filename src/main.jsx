import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './utils/i18n/i18n.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.Suspense fallback={'Loading...'}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</React.Suspense>
);
