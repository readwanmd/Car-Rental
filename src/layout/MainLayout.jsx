import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';
<<<<<<< HEAD
import ScrollTop from '../components/common/ScrollTop';
=======
>>>>>>> 621274a9a4abb850bbfe26c54fc81864e778f5d5

const MainLayout = () => {
	return (
		<main>
			<Navbar />

			<Outlet />

<<<<<<< HEAD
			<ScrollTop />
=======
>>>>>>> 621274a9a4abb850bbfe26c54fc81864e778f5d5
			<Footer />
		</main>
	);
};
export default MainLayout;
