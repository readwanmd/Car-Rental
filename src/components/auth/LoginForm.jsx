import {
	IconBrandSamsungpass,
	IconEye,
	IconEyeOff,
	IconMail,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Field from '../common/Field‎';

const LoginForm = () => {
	const [isPasswordShown, setIsPasswordShown] = useState(false);
	const handleShowPassword = () => {
		setIsPasswordShown((prev) => !prev);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (formData) => {
		console.log(formData);
	};
	return (
		<div className="auth-form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field icon={IconMail} label={'Email'} error={errors.email}>
					<input
						{...register('email', {
							required: `Email is required`,
						})}
						type="text"
						placeholder={`Enter your email`}
					/>
				</Field>

				<Field
					icon={IconBrandSamsungpass}
					label={'Password'}
					error={errors.password}
				>
					<div style={{ position: 'relative' }}>
						<input
							{...register('password', {
								required: `Password is required`,
							})}
							type={isPasswordShown ? 'text' : 'password'}
							placeholder={`Enter your password`}
							style={{ position: 'relative' }}
						/>
						<div className="password-show-hide" onClick={handleShowPassword}>
							{isPasswordShown ? <IconEye /> : <IconEyeOff />}
						</div>
					</div>
				</Field>

				<button type="submit">Login</button>
			</form>
		</div>
	);
};
export default LoginForm;
