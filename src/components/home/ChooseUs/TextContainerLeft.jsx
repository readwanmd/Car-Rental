import { IconChevronRight } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

function TextContainerLeft() {
	const { t } = useTranslation('chooseUs');
	const line1 = t('line1');
	const section_title = t('section_title');
	const subtitle = t('subtitle');
	const find_details = t('find_details');

	return (
		<div className="text-container__left">
			<h4>{line1}</h4>
			<h2>{section_title}</h2>
			<p>{subtitle}</p>
			<a href="#home">
				{find_details} &nbsp;
				<IconChevronRight />
			</a>
		</div>
	);
}

export default TextContainerLeft;
