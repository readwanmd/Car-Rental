import { IconLocation, IconMail, IconPhone } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

function ContactText() {
	const { t } = useTranslation('contact_us');
	const title = t('title');
	const desc = t('desc');

	return (
		<div className="contact-div__text">
			<h2>{title}</h2>
			<p>{desc}</p>
			<div className="links">
				<a>
					<IconPhone /> &nbsp; (123) 456-7869
				</a>
				<a>
					<IconMail /> &nbsp; carrental@carmail.com
				</a>
				<a>
					<IconLocation />
					&nbsp; Belgrade, Serbia
				</a>
			</div>
		</div>
	);
}

export default ContactText;
