import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { About, Contact, Home, Models, Team, TestimonialsPage } from '../pages';

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route index path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="models" element={<Models />} />
				<Route path="testimonials" element={<TestimonialsPage />} />
				<Route path="team" element={<Team />} />
				<Route path="contact" element={<Contact />} />
			</Route>
		</Routes>
	);
};
export default AppRoutes;
