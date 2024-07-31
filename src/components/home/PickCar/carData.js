import { useTranslation } from 'react-i18next';
import { audia1, benz, bmw320, golf6, passatcc, toyotacamry } from '/public';

const useCarData = () => {
	const { t } = useTranslation('pickCar');
	const { car1, car2, car3, car4, car5, car6 } = t('cars');

	const CAR_DATA = [
		[
			{
				name: `${car1.name}`,
				price: `${car1.price}`,
				img: golf6,
				model: `${car1.model}`,
				mark: `${car1.mark}`,
				year: `${car1.year}`,
				doors: `${car1.doors}`,
				air: `${car1.air}`,
				transmission: `${car1.transmission}`,
				fuel: `${car1.fuel}`,
			},
		],
		[
			{
				name: `${car2.name}`,
				price: `${car2.price}`,
				img: audia1,
				model: `${car2.model}`,
				mark: `${car2.mark}`,
				year: `${car2.year}`,
				doors: `${car2.doors}`,
				air: `${car2.air}`,
				transmission: `${car2.transmission}`,
				fuel: `${car2.fuel}`,
			},
		],
		[
			{
				name: `${car3.name}`,
				price: `${car3.price}`,
				img: toyotacamry,
				model: `${car3.model}`,
				mark: `${car3.mark}`,
				year: `${car3.year}`,
				doors: `${car3.doors}`,
				air: `${car3.air}`,
				transmission: `${car3.transmission}`,
				fuel: `${car3.fuel}`,
			},
		],
		[
			{
				name: `${car4.name}`,
				price: `${car4.price}`,
				img: bmw320,
				model: `${car4.model}`,
				mark: `${car4.mark}`,
				year: `${car4.year}`,
				doors: `${car4.doors}`,
				air: `${car4.air}`,
				transmission: `${car4.transmission}`,
				fuel: `${car4.fuel}`,
			},
		],
		[
			{
				name: `${car5.name}`,
				price: `${car5.price}`,
				img: benz,
				model: `${car5.model}`,
				mark: `${car5.mark}`,
				year: `${car5.year}`,
				doors: `${car5.doors}`,
				air: `${car5.air}`,
				transmission: `${car5.transmission}`,
				fuel: `${car5.fuel}`,
			},
		],
		[
			{
				name: `${car6.name}`,
				price: `${car6.price}`,
				img: passatcc,
				model: `${car6.model}`,
				mark: `${car6.mark}`,
				year: `${car6.year}`,
				doors: `${car6.doors}`,
				air: `${car6.air}`,
				transmission: `${car6.transmission}`,
				fuel: `${car6.fuel}`,
			},
		],
	];

	return { CAR_DATA };
};

export default useCarData;
