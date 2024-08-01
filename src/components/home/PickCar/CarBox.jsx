/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function CarBox({ data, carID }) {
	const { t } = useTranslation('pickCar');
	const { name, price, model, mark, year, doors, air, transmission, fuel } =
		t('keys');
	const rent_per_day = t('rent_per_day');
	const reserve_now = t('reserve_now');

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
					<span>${car.price}</span>/ {rent_per_day}
				</div>
				<div className="pick-description__table">
					{[
						{ label: `${model}`, value: car.model },
						{ label: `${mark}`, value: car.mark },
						{ label: `${year}`, value: car.year },
						{ label: `${doors}`, value: car.doors },
						{ label: 'AC', value: car.air },
						{ label: `${transmission}`, value: car.transmission },
						{ label: `${fuel}`, value: car.fuel },
					].map((item, index) => (
						<div className="pick-description__table__col" key={index}>
							<span>{item.label}</span>
							<span>{item.value}</span>
						</div>
					))}
				</div>
				<a className="cta-btn" href="#booking-section">
					{reserve_now}
				</a>
			</div>
		</div>
	);
}

export default CarBox;
