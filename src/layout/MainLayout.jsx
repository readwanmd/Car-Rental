import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';
import ScrollTop from '../components/common/ScrollTop';

const MainLayout = () => {
	return (
		<main>
			<Navbar />

			<Outlet />

			<ScrollTop />
			<Footer />
		</main>
	);
};
export default MainLayout;
