import { HeroPages, Testimonials } from '../components';
import BookingBanner from '../components/common/BookingBanner';

const TestimonialsPage = () => {
	return (
		<>
			<section className="testimonial-page">
				<HeroPages name="Testimonials" />
				<Testimonials />
				<BookingBanner />
			</section>
		</>
	);
};
export default TestimonialsPage;
