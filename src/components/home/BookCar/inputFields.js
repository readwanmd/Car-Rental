export const personalInfoInputElements = [
	{
		name: 'firstName',
		type: 'text',
		label: 'First Name',
	},
	{
		name: 'lastName',
		type: 'text',
		label: 'Last Name',
	},
	{
		name: 'phoneNumber',
		type: 'tel',
		label: 'Phone Number',
	},
	{
		name: 'age',
		type: 'number',
		label: 'Age',
	},
	{
		name: 'email', // Corrected this line
		type: 'email',
		label: 'Email',
	},
	{
		name: 'address',
		type: 'text',
		label: 'Address',
	},
	{
		name: 'city',
		type: 'text',
		label: 'City',
	},
	{
		name: 'zipCode',
		type: 'text',
		label: 'Zip Code',
	},
];

export const carInfoElements = [
	{
		title: 'Pick-Up Date & Time',
		name: 'pickupDate',
		type: 'time',
		errorMessage: 'Pickup time is required',
	},
	{
		title: 'Drop-Off Date & Time',
		name: 'dropoffTime',
		type: 'time',
		errorMessage: 'Dropoff time is required',
	},
];
