import { useTranslation } from 'react-i18next';
import { pfp1, pfp2 } from '/public';

const useTestimonials = () => {
	const { t } = useTranslation('testimonials');
	const { card1, card2 } = t('cards');

	const testimonials = [
		{
			quote: `${card1.quote}`,
			imgSrc: pfp1,
			name: `${card1.name}`,
			location: `${card1.location}`,
		},
		{
			quote: `${card2.quote}`,
			imgSrc: pfp2,
			name: `${card2.name}`,
			location: `${card2.location}`,
		},
	];

	return { testimonials };
};

export default useTestimonials;
