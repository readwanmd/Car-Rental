/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

function CarBox({ data, carID }) {
	const [carLoad, setCarLoad] = useState(true);

	useEffect(() => {
		setCarLoad(true);
	}, [carID]);

	if (!data[carID] || data[carID].length === 0) {
		return <p>No car data available.</p>;
	}

	const car = data[carID][0];

	return (
		<div className="box-cars">
			<div className="pick-car">
				{carLoad && <span className="loader"></span>}
				<img
					style={{ display: carLoad ? 'none' : 'block' }}
					src={car.img}
					alt={`${car.name}_img`}
					onLoad={() => setCarLoad(false)}
				/>
			</div>
			<div className="pick-description">
				<div className="pick-description__price">
					<span>${car.price}</span>/ rent per day
				</div>
				<div className="pick-description__table">
					{[
						{ label: 'Model', value: car.model },
						{ label: 'Mark', value: car.mark },
						{ label: 'Year', value: car.year },
						{ label: 'Doors', value: car.doors },
						{ label: 'AC', value: car.air },
						{ label: 'Transmission', value: car.transmission },
						{ label: 'Fuel', value: car.fuel },
					].map((item, index) => (
						<div className="pick-description__table__col" key={index}>
							<span>{item.label}</span>
							<span>{item.value}</span>
						</div>
					))}
				</div>
				<a className="cta-btn" href="#booking-section">
					Reserve Now
				</a>
			</div>
		</div>
	);
}

export default CarBox;
