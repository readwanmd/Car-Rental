import { useTranslation } from 'react-i18next';
import { chooseIcon1, chooseIcon2, chooseIcon3 } from '/public';

const useRightCardData = () => {
	const { t } = useTranslation('chooseUs');
	const { card1, card2, card3 } = t('cards');

	const rightCardData = [
		{
			img: chooseIcon1,
			title: `${card1.title}`,
			description: `${card1.description}`,
		},
		{
			img: chooseIcon2,
			title: `${card2.title}`,
			description: `${card2.description}`,
		},
		{
			img: chooseIcon3,
			title: `${card3.title}`,
			description: `${card3.description}`,
		},
	];

	return { rightCardData };
};

export default useRightCardData;
