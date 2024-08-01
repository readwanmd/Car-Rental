import { HeroPages } from '../components';
import BookingBanner from '../components/common/BookingBanner';
import TeamContainer from '../components/team/TeamContainer';

function Team() {
	return (
		<>
			<section className="team-page">
				<HeroPages name="Our Team" />
				<div className="container">
					<TeamContainer />
				</div>

				<BookingBanner />
			</section>
		</>
	);
}

export default Team;
