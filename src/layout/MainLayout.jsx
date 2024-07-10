import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';

const MainLayout = () => {
	return (
		<main>
			<Navbar />

			<Outlet />

			<Footer />
		</main>
	);
};
export default MainLayout;
