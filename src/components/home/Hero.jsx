import { IconChevronRight, IconCircleCheck } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BgShape from '/images/hero/hero-bg.png';
import HeroCar from '/images/hero/main-car.png';

const Hero = () => {
	const { t } = useTranslation();

	return (
		<section id="home" className="hero-section">
			<div className="container">
				<img className="bg-shape" src={BgShape} alt="bg-shape" />
				<div className="hero-content">
					<div className="hero-content__text">
						<h4>Plan your trip now</h4>
						<h1>
							{/* Save <span>big</span> with our car rental */}
							{t('hero')}
						</h1>
						<p>
							Rent the car of your dreams. Unbeatable prices, unlimited miles,
							flexible pick-up options and much more.
						</p>
						<div className="hero-content__text__btns">
							<a
								href="#booking-section"
								className="hero-content__text__btns__book-ride"
							>
								Book Ride &nbsp; <IconCircleCheck />
							</a>
							<Link className="hero-content__text__btns__learn-more" to="/">
								Learn More &nbsp; <IconChevronRight />
							</Link>
						</div>
					</div>

					{/* img */}
					<img src={HeroCar} alt="car-img" className="hero-content__car-img" />
				</div>
			</div>
		</section>
	);
};
export default Hero;
