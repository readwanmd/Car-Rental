import { IconCar } from '@tabler/icons-react';

function ModelDetails({ make, seats, transmission, fuel }) {
	return (
		<div className="models-div__box__descr__name-price__details">
			<div>
				<span>
					<IconCar /> &nbsp; {make}
				</span>
				<span style={{ textAlign: 'right' }}>
					{seats} &nbsp; <IconCar />
				</span>
			</div>
			<div>
				<span>
					<IconCar /> &nbsp; {transmission}
				</span>
				<span style={{ textAlign: 'right' }}>
					{fuel} &nbsp; <IconCar />
				</span>
			</div>
		</div>
	);
}

export default ModelDetails;
