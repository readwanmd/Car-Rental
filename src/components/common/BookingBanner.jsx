import { IconPhone } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

const BookingBanner = () => {
	const { t } = useTranslation('bookingBanner');
	const title = t('title');

	return (
		<div className="book-banner">
			<div className="book-banner__overlay"></div>
			<div className="container">
				<div className="text-content">
					<h2>{title}</h2>
					<span>
						<IconPhone width={40} height={40} />
						<h3>(123) 456-7869</h3>
					</span>
				</div>
			</div>
		</div>
	);
};
export default BookingBanner;
