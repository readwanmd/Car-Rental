import { HeroPages } from '../components';
import BookingBanner from '../components/common/BookingBanner';
import ContactForm from '../components/contact/ContactForm';
import ContactText from '../components/contact/ContactText';

function Contact() {
	return (
		<>
			<section className="contact-page">
				<HeroPages name="Contact" />
				<div className="container">
					<div className="contact-div">
						<ContactText />
						<ContactForm />
					</div>
				</div>
				<BookingBanner />
			</section>
		</>
	);
}

export default Contact;
