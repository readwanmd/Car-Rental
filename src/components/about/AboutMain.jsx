import AboutIcons from './AboutIcons';
import { aboutMain } from '/public';

function AboutMain() {
	return (
		<div className="about-main">
			<img className="about-main__img" src={aboutMain} alt="car-renting" />
			<div className="about-main__text">
				<h3>About Company</h3>
				<h2>You start the engine and your adventure begins</h2>
				<p>
					Certain but she but shyness why cottage. Guy the put instrument sir
					entreaties affronting. Pretended exquisite see cordially the you.
					Weeks quiet do vexed or whose. Motionless if no to affronting
					imprudence no precaution. My indulged as disposal strongly attended.
				</p>
				<AboutIcons />
			</div>
		</div>
	);
}

export default AboutMain;
