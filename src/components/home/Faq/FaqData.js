import { useTranslation } from 'react-i18next';

const useFaqData = () => {
	const { t } = useTranslation('faq');
	const { faq1, faq2, faq3 } = t('faqs');

	const faqData = [
		{
			id: 'q1',
			question: `${faq1.question}`,
			answer: `${faq1.answer}`,
		},
		{
			id: 'q2',
			question: `${faq2.question}`,
			answer: `${faq2.answer}`,
		},
		{
			id: 'q3',
			question: `${faq3.question}`,
			answer: `${faq3.answer}`,
		},
	];

	return { faqData };
};

export default useFaqData;
