import { icon1, icon2, icon3 } from '/public';

function AboutIcons() {
	return (
		<div className="about-main__text__icons">
			<div className="about-main__text__icons__box">
				<img src={icon1} alt="car-icon" />
				<span>
					<h4>20</h4>
					<p>Car Types</p>
				</span>
			</div>
			<div className="about-main__text__icons__box">
				<img src={icon2} alt="car-icon" />
				<span>
					<h4>85</h4>
					<p>Rental Outlets</p>
				</span>
			</div>
			<div className="about-main__text__icons__box">
				<img src={icon3} alt="car-icon" className="last-fk" />
				<span>
					<h4>75</h4>
					<p>Repair Shop</p>
				</span>
			</div>
		</div>
	);
}

export default AboutIcons;
