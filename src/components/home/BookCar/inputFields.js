import { useTranslation } from 'react-i18next';

const useFormElements = () => {
	const { t } = useTranslation('bookingModal');

	const { input_label } = t('personal_info');
	const booking_info = t('booking_info');
	const error = t('error');

	const personalInfoInputElements = [
		{
			name: 'firstName',
			type: 'text',
			label: `${input_label.f_name}`,
		},
		{
			name: 'lastName',
			type: 'text',
			label: `${input_label.l_name}`,
		},
		{
			name: 'phoneNumber',
			type: 'tel',
			label: `${input_label.phone}`,
		},
		{
			name: 'age',
			type: 'number',
			label: `${input_label.age}`,
		},
		{
			name: 'email',
			type: 'email',
			label: `${input_label.email}`,
		},
		{
			name: 'address',
			type: 'text',
			label: `${input_label.address}`,
		},
		{
			name: 'city',
			type: 'text',
			label: `${input_label.city}`,
		},
		{
			name: 'zipCode',
			type: 'text',
			label: `${input_label.zip}`,
		},
	];

	const carInfoElements = [
		{
			title: `${booking_info.pickup_dt}`,
			name: 'pickupDate',
			type: 'time',
			errorMessage: `${booking_info.error.pickup_dt}`,
		},
		{
			title: `${booking_info.dropoff_dt}`,
			name: 'dropoffTime',
			type: 'time',
			errorMessage: `${booking_info.error.dropoff_dt}`,
		},
	];

	return { personalInfoInputElements, carInfoElements };
};

export default useFormElements;
