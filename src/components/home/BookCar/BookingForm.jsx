/* eslint-disable react/prop-types */
import {
	IconCalendarEvent,
	IconCar,
	IconMapPinFilled,
} from '@tabler/icons-react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
	audia1,
	benz,
	bmw320,
	golf6,
	passatcc,
	toyotacamry,
} from '../../../../public';
import Field from '../../common/Field‎';

const carOptions = [
	{ model: 'Audi A1 S-Line', imgPath: audia1 },
	{ model: 'VW Golf 6', imgPath: golf6 },
	{ model: 'Toyota Camry', imgPath: toyotacamry },
	{ model: 'BMW 320 ModernLine', imgPath: bmw320 },
	{ model: 'Mercedes-Benz GLK', imgPath: benz },
	{ model: 'VW Passat CC', imgPath: passatcc },
];

const BookingForm = ({ handleSearchSubmit }) => {
	const { t } = useTranslation('bookingForm');
	const {
		car_type,
		pickup_location,
		dropoff_location,
		pickup_date,
		dropoff_date,
	} = t('field_label');

	const error = t('field_error');
	const placeholder = t('placeholder');
	console.log(placeholder);
	const submit_btn = t('submit_btn');

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		const selectedCar = carOptions[data.car];
		const formData = {
			...data,
			car: selectedCar,
		};
		handleSearchSubmit(formData);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="box-form">
			<Field
				label={car_type}
				icon={IconCar}
				error={errors.car}
				htmlClass={'box-form__car-type'}
			>
				<select {...register('car', { required: `${error.car_type}` })}>
					<option value="">{placeholder.car_type}</option>
					{carOptions.map((car, index) => (
						<option key={car.model} value={index}>
							{car.model}
						</option>
					))}
				</select>
			</Field>

			<Field
				label={pickup_location}
				icon={IconMapPinFilled}
				htmlClass={'box-form__car-type'}
				error={errors.pickup}
			>
				<select
					{...register('pickup', { required: `${error.pickup_location}` })}
				>
					<option value="">{placeholder.pickup_location}</option>
					<option value="Belgrade">Belgrade</option>
					<option value="Novi Sad">Novi Sad</option>
					<option value="Nis">Nis</option>
					<option value="Kragujevac">Kragujevac</option>
					<option value="Subotica">Subotica</option>
				</select>
			</Field>

			<Field
				label={dropoff_location}
				icon={IconMapPinFilled}
				htmlClass={'box-form__car-type'}
				error={errors.dropoff}
			>
				<select
					{...register('dropoff', {
						required: `${error.dropoff_location}`,
					})}
				>
					<option value="">{placeholder.dropoff_location}</option>
					<option value="Novi Sad">Novi Sad</option>
					<option value="Belgrade">Belgrade</option>
					<option value="Nis">Nis</option>
					<option value="Kragujevac">Kragujevac</option>
					<option value="Subotica">Subotica</option>
				</select>
			</Field>

			<Field
				label={pickup_date}
				icon={IconCalendarEvent}
				htmlClass={'box-form__car-time'}
				error={errors.pickupDate}
			>
				<input
					{...register('pickupDate', { required: `${error.pickup_date}` })}
					id="pickdate"
					type="date"
				/>
			</Field>

			<Field
				label={dropoff_date}
				icon={IconCalendarEvent}
				htmlClass={'box-form__car-time'}
				error={errors.dropoffDate}
			>
				<input
					{...register('dropoffDate', {
						required: `${error.dropoff_date}`,
					})}
					id="dropdate"
					type="date"
				/>
			</Field>

			<button type="submit" className="submit-button">
				{submit_btn}
			</button>
		</form>
	);
};

export default BookingForm;
