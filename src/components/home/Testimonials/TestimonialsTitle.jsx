import { useTranslation } from 'react-i18next';

function TestimonialsTitle() {
	const { t } = useTranslation('testimonials');
	const line1 = t('line1');
	const section_title = t('section_title');
	const subtitle = t('subtitle');

	return (
		<div className="testimonials-content__title">
			<h4>{line1}</h4>
			<h2>{section_title}</h2>
			<p>{subtitle}</p>
		</div>
	);
}

export default TestimonialsTitle;
