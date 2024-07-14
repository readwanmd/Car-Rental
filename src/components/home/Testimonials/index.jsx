import TestimonialCard from './TestimonialCard';
import { testimonials } from './testimonialData';
import TestimonialsTitle from './TestimonialsTitle';
import Img2 from '/images/testimonials/pfp1.jpg';

function Testimonials() {
	return (
		<section className="testimonials-section">
			<div className="container">
				<div className="testimonials-content">
					<TestimonialsTitle />
					<div className="all-testimonials">
						{testimonials.map((testimonial) => (
							<TestimonialCard
								key={crypto.randomUUID()}
								quote="We rented a car from this website and had an amazing
							experience! The booking was easy and the rental rates were
							very affordable."
								imgSrc={Img2}
								name="Parry Hotter"
								location="Belgrade"
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
