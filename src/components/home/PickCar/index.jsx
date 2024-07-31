import { useState } from 'react';
import CarBox from './CarBox';
import useCarData from './carData';

function PickCar() {
	const { CAR_DATA } = useCarData();
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
						<h3>Vehicle Models</h3>
						<h2>Our rental fleet</h2>
						<p>
							Choose from a variety of our amazing vehicles to rent for your
							next adventure or business trip.
						</p>
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
