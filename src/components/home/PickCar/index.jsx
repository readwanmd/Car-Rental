import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CarBox from './CarBox';
import useCarData from './carData';

function PickCar() {
	const { CAR_DATA } = useCarData();

	const { t } = useTranslation('pickCar');
	const line1 = t('line1');
	const section_title = t('section_title');
	const subtitle = t('subtitle');

	const [activeCarIndex, setActiveCarIndex] = useState(0);
	const [activeButton, setActiveButton] = useState('btn1');

	const handleButtonClick = (index, btnId) => {
		setActiveCarIndex(index);
		setActiveButton(btnId);
	};

	const getButtonClass = (btnId) =>
		activeButton === btnId ? 'colored-button' : '';

	return (
		<section className="pick-section">
			<div className="container">
				<div className="pick-container">
					<div className="pick-container__title">
						<h3>{line1}</h3>
						<h2>{section_title}</h2>
						<p>{subtitle}</p>
					</div>
					<div className="pick-container__car-content">
						<div className="pick-box">
							{CAR_DATA.map((_, index) => (
								<button
									key={index}
									className={getButtonClass(`btn${index + 1}`)}
									onClick={() => handleButtonClick(index, `btn${index + 1}`)}
								>
									{CAR_DATA[index][0].name}
								</button>
							))}
						</div>
						<CarBox data={CAR_DATA} carID={activeCarIndex} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default PickCar;
