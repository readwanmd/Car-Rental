import { HeroPages, PlanTrip } from '../components';
import AboutMain from '../components/about/AboutMain';
import BookBanner from '../components/about/BookBanner';

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
			<BookBanner />
		</>
	);
}

export default About;
