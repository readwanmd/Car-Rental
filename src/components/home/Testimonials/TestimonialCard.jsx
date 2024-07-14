import { IconQuote } from '@tabler/icons-react';

function TestimonialCard({ quote, imgSrc, name, location }) {
	return (
		<div className="all-testimonials__box">
			<span className="quotes-icon">
				<IconQuote width={60} height={60} />
			</span>
			<p>&quot;{quote}&quot;</p>
			<div className="all-testimonials__box__name">
				<div className="all-testimonials__box__name__profile">
					<img src={imgSrc} alt="user_img" />
					<span>
						<h4>{name}</h4>
						<p>{location}</p>
					</span>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
