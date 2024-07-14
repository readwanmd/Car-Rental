/* eslint-disable react/prop-types */
import {
	IconInfoCircleFilled,
	IconMapPinFilled,
	IconX,
} from '@tabler/icons-react';
import { useForm } from 'react-hook-form';
import Field from '../../common/Field‎';
import { carInfoElements, personalInfoInputElements } from './inputFields';

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

							{carInfoElements.map((carElement) => (
								<div
									key={carElement.name}
									className="booking-modal__car-info__dates"
								>
									<span>
										<IconMapPinFilled />
										<div>
											<h6>{carElement.title}</h6>
											<p>
												{search?.dropoffDate} /{' '}
												<Field error={errors[carElement.name]}>
													<input
														{...register(carElement.name, {
															required: `${carElement.errorMessage}`,
														})}
														type={carElement.type}
														className="input-time"
													></input>
												</Field>
											</p>
										</div>
									</span>
								</div>
							))}
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
							{personalInfoInputElements.map((personalInfo) => (
								<span key={crypto.randomUUID()}>
									<Field
										label={personalInfo.label}
										error={errors[personalInfo.name]}
									>
										<input
											{...register(personalInfo.name, {
												required: `${personalInfo.label} is required`,
											})}
											type="text"
											placeholder={`Enter your ${personalInfo.label.toLowerCase()}`}
										/>
									</Field>
								</span>
							))}
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
