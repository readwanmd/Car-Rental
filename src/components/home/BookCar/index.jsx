import { IconX } from '@tabler/icons-react';
import { useState } from 'react';
import BookingForm from './BookingForm';
import BookingModal from './BookingModal';

function BookCar() {
	const [search, setSearch] = useState(null);
	const [modal, setModal] = useState(false);
	const [confirmBooking, setConfirmBooking] = useState(false);

	const handleSearchSubmit = async (formData) => {
		console.log(formData);
		setSearch(formData);
		setModal((prev) => !prev);
	};

	const handleBookingModal = async (formData) => {
		console.log(formData);
		handleConfirmBooking();
	};

	const openModal = (e) => {
		setModal(!modal);
	};

	// confirm modal booking
	const handleConfirmBooking = (e) => {
		setModal((prev) => !prev);
		setConfirmBooking((prev) => !prev);
	};

	return (
		<>
			<section id="booking-section" className="book-section">
				{/* overlay */}

				<div className="container">
					<div className="book-content">
						<div className="book-content__box">
							<h2>Book a car</h2>

							{confirmBooking && (
								<p className="booking-done">
									Check your email to confirm an order.{' '}
									<IconX
										width={20}
										height={20}
										onClick={() => setConfirmBooking(false)}
									/>
								</p>
							)}

							<BookingForm handleSearchSubmit={handleSearchSubmit} />
						</div>
					</div>
				</div>
			</section>

			<BookingModal
				initialBookingData={search}
				modal={modal}
				openModal={openModal}
				handleBookingModal={handleBookingModal}
			/>
		</>
	);
}

export default BookCar;
