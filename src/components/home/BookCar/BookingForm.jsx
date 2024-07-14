/* eslint-disable react/prop-types */
import {
	IconCalendarEvent,
	IconCar,
	IconMapPinFilled,
} from '@tabler/icons-react';
import { useForm } from 'react-hook-form';
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
				label="Select Your Car Type"
				icon={IconCar}
				error={errors.car}
				htmlClass={'box-form__car-type'}
			>
				<select {...register('car', { required: 'Car type is required' })}>
					<option value="">Select your car type</option>
					{carOptions.map((car, index) => (
						<option key={car.model} value={index}>
							{car.model}
						</option>
					))}
				</select>
			</Field>

			<Field
				label="Pick-up Location"
				icon={IconMapPinFilled}
				htmlClass={'box-form__car-type'}
				error={errors.pickup}
			>
				<select
					{...register('pickup', { required: 'Pick-up location is required' })}
				>
					<option value="">Select pick-up location</option>
					<option value="Belgrade">Belgrade</option>
					<option value="Novi Sad">Novi Sad</option>
					<option value="Nis">Nis</option>
					<option value="Kragujevac">Kragujevac</option>
					<option value="Subotica">Subotica</option>
				</select>
			</Field>

			<Field
				label="Drop-off Location"
				icon={IconMapPinFilled}
				htmlClass={'box-form__car-type'}
				error={errors.dropoff}
			>
				<select
					{...register('dropoff', {
						required: 'Drop-off location is required',
					})}
				>
					<option value="">Select drop-off location</option>
					<option value="Novi Sad">Novi Sad</option>
					<option value="Belgrade">Belgrade</option>
					<option value="Nis">Nis</option>
					<option value="Kragujevac">Kragujevac</option>
					<option value="Subotica">Subotica</option>
				</select>
			</Field>

			<Field
				label="Pick-up Date"
				icon={IconCalendarEvent}
				htmlClass={'box-form__car-time'}
				error={errors.pickupTime}
			>
				<input
					{...register('pickupDate', { required: 'Pick-up date is required' })}
					id="pickdate"
					type="date"
				/>
			</Field>

			<Field
				label="Drop-off Date"
				icon={IconCalendarEvent}
				htmlClass={'box-form__car-time'}
				error={errors.dropoffTime}
			>
				<input
					{...register('dropoffDate', {
						required: 'Drop-off date is required',
					})}
					id="dropdate"
					type="date"
				/>
			</Field>

			<button type="submit" className="submit-button">
				Search
			</button>
		</form>
	);
};

export default BookingForm;
