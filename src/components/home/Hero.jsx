import { IconChevronRight, IconCircleCheck } from '@tabler/icons-react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import BgShape from '/images/hero/hero-bg.png';
import HeroCar from '/images/hero/main-car.png';

const Hero = () => {
	const { t } = useTranslation('hero');
	const { line1, line2 } = t('title');
	const subtitle = t('subtitle');
	const { learn_more, book_ride } = t('button');

	return (
		<section id="home" className="hero-section">
			<div className="container">
				<img className="bg-shape" src={BgShape} alt="bg-shape" />
				<div className="hero-content">
					<div className="hero-content__text">
						<h4>{line1}</h4>
						<h1>
							{/* Save <span>big</span> with our car rental */}
							<Trans i18nKey={line2} components={{ 1: <span /> }} />
						</h1>
						<p>{subtitle}</p>
						<div className="hero-content__text__btns">
							<a
								href="#booking-section"
								className="hero-content__text__btns__book-ride"
							>
								{book_ride} &nbsp; <IconCircleCheck />
							</a>
							<Link className="hero-content__text__btns__learn-more" to="/">
								{learn_more} &nbsp; <IconChevronRight />
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
