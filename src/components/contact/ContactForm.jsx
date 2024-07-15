import { IconMailOpened } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';
import Field from '../common/Field‎';

function ContactForm() {
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
				<Field label={'Full Name'} error={errors.fullName}>
					<input
						type="text"
						placeholder='E.g: "Joe Shmoe"'
						{...register('fullName', { required: 'Your name is required' })}
					/>
				</Field>

				<Field label={'Email'} error={errors.email}>
					<input
						type="email"
						placeholder="youremail@example.com"
						{...register('email', { required: 'Your email is required' })}
					/>
				</Field>

				<Field label={'Message'} error={errors.message}>
					<textarea
						placeholder="Write Here.."
						{...register('message', { required: 'Message is required' })}
					></textarea>
				</Field>

				<button type="submit">
					<IconMailOpened />
					&nbsp; Send Message
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
