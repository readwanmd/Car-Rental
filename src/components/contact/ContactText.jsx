import { IconLocation, IconMail, IconPhone } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function ContactText() {
	const { t } = useTranslation('contact_us');
	const title = t('title');
	const desc = t('desc');

	return (
		<div className="contact-div__text">
			<h2>{title}</h2>
			<p>{desc}</p>
			<Link>
				<IconPhone /> &nbsp; (123) 456-7869
			</Link>
			<Link>
				<IconMail /> &nbsp; carrental@carmail.com
			</Link>
			<Link>
				<IconLocation />
				&nbsp; Belgrade, Serbia
			</Link>
		</div>
	);
}

export default ContactText;
