import { useTranslation } from 'react-i18next';
import { icon1, icon2, icon3 } from '/public';

function AboutIcons() {
	const { t } = useTranslation('about');
	const { card1, card2, card3 } = t('cards');

	return (
		<div className="about-main__text__icons">
			<div className="about-main__text__icons__box">
				<img src={icon1} alt="car-icon" />
				<span>
					<h4>{card1.count}</h4>
					<p>{card1.title}</p>
				</span>
			</div>
			<div className="about-main__text__icons__box">
				<img src={icon2} alt="car-icon" />
				<span>
					<h4>{card2.count}</h4>
					<p>{card2.title}</p>
				</span>
			</div>
			<div className="about-main__text__icons__box">
				<img src={icon3} alt="car-icon" className="last-fk" />
				<span>
					<h4>{card3.count}</h4>
					<p>{card3.title}</p>
				</span>
			</div>
		</div>
	);
}

export default AboutIcons;
