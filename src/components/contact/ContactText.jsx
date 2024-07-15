import { IconLocation, IconMail, IconPhone } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

function ContactText() {
	return (
		<div className="contact-div__text">
			<h2>Need additional information?</h2>
			<p>
				A multifaceted professional skilled in multiple fields of research,
				development as well as a learning specialist. Over 15 years of
				experience.
			</p>
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
