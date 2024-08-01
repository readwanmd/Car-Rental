import { useTranslation } from 'react-i18next';
import {
	audiBox,
	benzBox,
	bmwBox,
	golf6Box,
	passatBox,
	toyotaBox,
} from '/public';

const useModelData = () => {
	const { t } = useTranslation('carModels');
	const { car1, car2, car3, car4, car5, car6 } = t('cars');

	const modelData = [
		{
			name: 'Audi A1',
			price: `${car1.price}`,
			img: audiBox,
			make: 'Audi',
			seats: `${car1.seats}`,
			transmission: `${car1.transmission}`,
			fuel: `${car1.fuel}`,
		},
		{
			name: 'Golf 6',
			price: `${car2.price}`,
			img: golf6Box,
			make: 'VW',
			seats: `${car2.seats}`,
			transmission: `${car2.transmission}`,
			fuel: `${car2.fuel}`,
		},
		{
			name: 'Toyota',
			price: `${car3.price}`,
			img: toyotaBox,
			make: 'Camry',
			seats: `${car3.seats}`,
			transmission: `${car3.transmission}`,
			fuel: `${car3.fuel}`,
		},
		{
			name: 'BMW 320',
			price: `${car4.price}`,
			img: bmwBox,
			make: 'ModernLine',
			seats: `${car4.seats}`,
			transmission: `${car4.transmission}`,
			fuel: `${car4.fuel}`,
		},
		{
			name: 'Mercedes',
			price: `${car5.price}`,
			img: benzBox,
			make: 'Benz GLK',
			seats: `${car5.seats}`,
			transmission: `${car5.transmission}`,
			fuel: `${car5.fuel}`,
		},
		{
			name: 'VW Passat',
			price: `${car6.price}`,
			img: passatBox,
			make: 'CC',
			seats: `${car6.seats}`,
			transmission: `${car6.transmission}`,
			fuel: `${car6.fuel}`,
		},
	];

	return { modelData };
};
export default useModelData;
