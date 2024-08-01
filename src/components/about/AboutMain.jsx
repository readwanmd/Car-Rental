import { useTranslation } from 'react-i18next';
import AboutIcons from './AboutIcons';
import { aboutMain } from '/public';

function AboutMain() {
	const { t } = useTranslation('about');
	const line1 = t('line1');
	const title = t('title');
	const desc = t('desc');
	return (
		<div className="about-main">
			<img className="about-main__img" src={aboutMain} alt="car-renting" />
			<div className="about-main__text">
				<h3>{line1}</h3>
				<h2>{title}</h2>
				<p>{desc}</p>
				<AboutIcons />
			</div>
		</div>
	);
}

export default AboutMain;
