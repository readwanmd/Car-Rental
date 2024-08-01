import { IconMailOpened } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Field from '../common/Field‎';

function ContactForm() {
	const { t } = useTranslation('contact_us');
	const { name, email, message } = t('contact_form');
	const send_message = t('send_message');

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="contact-div__form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field label={`${name.label}`} error={errors.fullName}>
					<input
						type="text"
						placeholder={`${name.placeholder}`}
						{...register('fullName', { required: `${name.error}` })}
					/>
				</Field>

				<Field label={'Email'} error={errors.email}>
					<input
						type={`${email.label}`}
						placeholder={`${email.placeholder}`}
						{...register('email', { required: `${email.error}` })}
					/>
				</Field>

				<Field label={`${message.label}`} error={errors.message}>
					<textarea
						placeholder={`${message.placeholder}`}
						{...register('message', { required: `${message.error}` })}
					></textarea>
				</Field>

				<button type="submit">
					<IconMailOpened />
					&nbsp; {send_message}
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
