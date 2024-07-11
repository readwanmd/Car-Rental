/* eslint-disable react/prop-types */
import {
	IconInfoCircleFilled,
	IconMapPinFilled,
	IconX,
} from '@tabler/icons-react';
import { useForm } from 'react-hook-form';
import Field from '../../common/Field‎';

const BookingModal = ({
	modal,
	openModal,
	initialBookingData: search,
	handleBookingModal,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (formData) => {
		handleBookingModal(formData);
	};

	return (
		<div className={`modal-overlay ${modal ? 'active-modal' : ''}`}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={`booking-modal ${modal ? 'active-modal' : ''}`}
			>
				{/* title */}
				<div className="booking-modal__title">
					<h2>Complete Reservation</h2>
					<IconX onClick={openModal} />
				</div>
				{/* message */}
				<div className="booking-modal__message">
					<h4>
						<IconInfoCircleFilled /> Upon completing this reservation enquiry,
						you will receive:
					</h4>
					<p>
						Your rental voucher to produce on arrival at the rental desk and a
						toll-free customer support number.
					</p>
				</div>
				{/* car info */}
				<div className="booking-modal__car-info">
					<div className="dates-div">
						<div className="booking-modal__car-info__dates">
							<h5>Location & Date</h5>
							<span>
								<IconMapPinFilled />
								<div>
									<h6>Pick-Up Date & Time</h6>
									<p>
										{search?.pickupTime} /{' '}
										<Field error={errors.pickupTime}>
											<input
												{...register('pickupTime', {
													required: 'Pickup time is required',
												})}
												type="time"
												className="input-time"
											></input>
										</Field>
									</p>
								</div>
							</span>
						</div>

						<div className="booking-modal__car-info__dates">
							<span>
								<IconMapPinFilled />
								<div>
									<h6>Drop-Off Date & Time</h6>
									<p>
										{search?.dropoffTime} /{' '}
										<Field error={errors.dropoffTime}>
											<input
												{...register('dropoffTime', {
													required: 'Dropoff time is required',
												})}
												type="time"
												className="input-time"
											></input>
										</Field>
									</p>
								</div>
							</span>
						</div>

						<div className="booking-modal__car-info__dates">
							<span>
								<IconMapPinFilled />
								<div>
									<h6>Pick-Up Location</h6>
									<p>{search?.pickup}</p>
								</div>
							</span>
						</div>

						<div className="booking-modal__car-info__dates">
							<span>
								<IconMapPinFilled />
								<div>
									<h6>Drop-Off Location</h6>
									<p>{search?.dropoff}</p>
								</div>
							</span>
						</div>
					</div>
					<div className="booking-modal__car-info__model">
						<h5>
							<span>Car -</span> {search?.car?.model}
						</h5>
						{search?.car && <img src={search?.car?.imgPath} alt="car_img" />}
					</div>
				</div>
				{/* personal info */}
				<div className="booking-modal__person-info">
					<h4>Personal Information</h4>
					<div className="info-form">
						<div className="info-form__2col">
							<span>
								<Field label={'First Name'} error={errors.firstName}>
									<input
										{...register('firstName', {
											required: 'First Name is required',
										})}
										type="text"
										placeholder="Enter your first name"
									/>
								</Field>
							</span>

							<span>
								<Field label={'Last Name'} error={errors.LastName}>
									<input
										{...register('LastName', {
											required: 'Last Name is required',
										})}
										type="text"
										placeholder="Enter your last name"
									/>
								</Field>
							</span>

							<span>
								<Field label={'Phone Number'} error={errors.phoneNo}>
									<input
										{...register('phoneNo', {
											required: 'Phone number is required',
										})}
										type="tel"
										placeholder="Enter your phone number"
									/>
								</Field>
							</span>

							<span>
								<Field label={'Age'} error={errors.age}>
									<input
										{...register('age', {
											required: 'Age is required',
										})}
										type="number"
										placeholder="Enter your age"
									/>
								</Field>
							</span>
						</div>

						<div className="info-form__1col">
							<Field label={'Email'} error={errors.email}>
								<input
									{...register('email', {
										required: 'Email is required',
									})}
									type="email"
									placeholder="Enter your email"
								/>
							</Field>

							<Field label={'address'} error={errors.address}>
								<input
									{...register('Address', {
										required: 'Address is required',
									})}
									type="text"
									placeholder="Enter your address"
								/>
							</Field>
						</div>

						<div className="info-form__2col">
							<Field label={'City'} error={errors.city}>
								<input
									{...register('city', {
										required: 'City is required',
									})}
									type="tel"
									placeholder="Enter your city"
								></input>
							</Field>

							<Field label={'Zip Code'} error={errors.zipCode}>
								<input
									{...register('zipCode', {
										required: 'Zip code is required',
									})}
									type="tel"
									placeholder="Enter your zip code"
								></input>
							</Field>
						</div>

						<span className="info-form__checkbox">
							<input type="checkbox" {...register('getUpdates')}></input>
							<p>Please send me latest news and updates</p>
						</span>

						<div className="reserve-button">
							<button>Reserve Now</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};
export default BookingModal;
