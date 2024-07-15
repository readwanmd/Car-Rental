import { IconPhone } from '@tabler/icons-react';
import { HeroPages } from '../components';
import TeamContainer from '../components/team/TeamContainer';

function Team() {
	return (
		<>
			<section className="team-page">
				<HeroPages name="Our Team" />
				<div className="container">
					<TeamContainer />
				</div>
				<div className="book-banner">
					<div className="book-banner__overlay"></div>
					<div className="container">
						<div className="text-content">
							<h2>Book a car by getting in touch with us</h2>
							<span>
								<IconPhone width={40} height={40} />
								<h3>(123) 456-7869</h3>
							</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Team;
