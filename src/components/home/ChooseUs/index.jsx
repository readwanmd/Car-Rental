import TextContainerLeft from './TextContainerLeft';
import TextContainerRight from './TextContainerRight';
import MainImg from '/images/chooseUs/main.png';

function ChooseUs() {
	return (
		<section className="choose-section">
			<div className="container">
				<div className="choose-container">
					<img className="choose-container__img" src={MainImg} alt="car_img" />
					<div className="text-container">
						<TextContainerLeft />
						<TextContainerRight />
					</div>
				</div>
			</div>
		</section>
	);
}

export default ChooseUs;
