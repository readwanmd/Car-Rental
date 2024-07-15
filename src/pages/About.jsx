import { HeroPages, PlanTrip } from '../components';
import AboutMain from '../components/about/AboutMain';
import BookingBanner from '../components/common/BookingBanner';

function About() {
	return (
		<>
			<section className="about-page">
				<HeroPages name="About" />
				<div className="container">
					<AboutMain />
					<PlanTrip />
				</div>
			</section>
			<BookingBanner />
		</>
	);
}

export default About;
