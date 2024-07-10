import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import './styles/styles.scss';

const App = () => {
	return (
		<>
			<Router>
				<AppRoutes />
			</Router>
		</>
	);
};
export default App;
