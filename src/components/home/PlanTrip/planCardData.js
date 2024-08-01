import { useTranslation } from 'react-i18next';
import { planIcon1, planIcon2, planIcon3 } from '../../../../public';

const usePlanCardData = () => {
	const { t } = useTranslation('planTrip');
	const { card1, card2, card3 } = t('cards');

	const planCardData = [
		{
			title: `${card1.title}`,
			desc: `${card1.desc}`,
			icon: planIcon1,
		},
		{
			title: `${card2.title}`,
			desc: `${card2.desc}`,
			icon: planIcon2,
		},
		{
			title: `${card3.title}`,
			desc: `${card3.desc}`,
			icon: planIcon3,
		},
	];

	return { planCardData };
};

export default usePlanCardData;
