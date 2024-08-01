import TestimonialCard from './TestimonialCard';
import useTestimonials from './testimonialData';

import TestimonialsTitle from './TestimonialsTitle';

function Testimonials() {
	const { testimonials } = useTestimonials();
	return (
		<section className="testimonials-section">
			<div className="container">
				<div className="testimonials-content">
					<TestimonialsTitle />
					<div className="all-testimonials">
						{testimonials.map((testimonial) => (
							<TestimonialCard
								key={crypto.randomUUID()}
								quote={testimonial.quote}
								imgSrc={testimonial.imgSrc}
								name={testimonial.name}
								location={testimonial.location}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
