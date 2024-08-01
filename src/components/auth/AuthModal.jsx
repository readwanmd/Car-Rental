import { IconSquareX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { logo } from '/public/';

const AuthModal = ({ isOpen, onClose, mode }) => {
	const [fadeIn, setFadeIn] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setTimeout(() => {
				setFadeIn(true);
			}, 10);
		} else {
			setFadeIn(false);
		}
	}, [isOpen]);

	return (
		<div
			className="modalBackground"
			style={{
				opacity: fadeIn ? 1 : 0,
				transition: 'opacity 0.5s ease-in-out',
				visibility: isOpen ? 'visible' : 'hidden',
			}}
		>
			<div className="modalContainer">
				<div className="closeBtn">
					<button onClick={onClose}>
						<IconSquareX stroke={1} />
					</button>
				</div>
				<div className="head">
					<div className="logo">
						<img src={logo} alt="" />
					</div>
					<h2>{mode === 'login' ? 'Login' : 'Register'}</h2>
				</div>
				<div className="body">
					{mode === 'login' ? <LoginForm /> : <RegisterForm />}
				</div>
			</div>
		</div>
	);
};

export default AuthModal;
