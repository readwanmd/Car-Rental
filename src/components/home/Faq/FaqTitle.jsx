import { useTranslation } from 'react-i18next';

function FaqTitle() {
	const { t } = useTranslation('faq');
	const line1 = t('line1');
	const section_title = t('section_title');
	const subtitle = t('subtitle');

	return (
		<div className="faq-content__title">
			<h5>{line1}</h5>
			<h2>{section_title}</h2>
			<p>{subtitle}</p>
		</div>
	);
}

export default FaqTitle;
