import { IconMenu2, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AuthModal from '../auth/AuthModal';
import LanguageSelect from './LanguageSelect';
import Logo from '/images/logo/logo.png';

function Navbar() {
	const { t } = useTranslation('navbar');
	const { home, about, vehicle_Models, testimonials, our_team, contact } =
		t('navitems');

	const [nav, setNav] = useState(false);
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
	const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'

	const openNav = () => {
		setNav(!nav);
	};

	const handleAuthModalOpen = (mode) => {
		setAuthMode(mode);
		setIsAuthModalOpen(true);
	};

	const handleAuthModalClose = () => {
		setIsAuthModalOpen(false);
	};

	return (
		<>
			<nav>
				{/* mobile */}
				<div className={`mobile-navbar ${nav ? 'open-nav' : ''}`}>
					<div onClick={openNav} className="mobile-navbar__close">
						<IconX width={30} height={30} />
					</div>
					<ul className="mobile-navbar__links">
						<li>
							<Link onClick={openNav} to="/">
								{home}
							</Link>
						</li>
						<li>
							<Link onClick={openNav} to="/about">
								{about}
							</Link>
						</li>
						<li>
							<Link onClick={openNav} to="/models">
								{vehicle_Models}
							</Link>
						</li>
						<li>
							<Link onClick={openNav} to="/testimonials">
								{testimonials}
							</Link>
						</li>
						<li>
							<Link onClick={openNav} to="/team">
								{our_team}
							</Link>
						</li>
						<li>
							<Link onClick={openNav} to="/contact">
								{contact}
							</Link>
						</li>

						<li>
							<LanguageSelect />
						</li>
					</ul>
				</div>

				{/* desktop */}

				<div className="navbar">
					<div className="navbar__img">
						<Link to="/" onClick={() => window.scrollTo(0, 0)}>
							<img src={Logo} alt="logo-img" />
						</Link>
					</div>
					<ul className="navbar__links">
						<li>
							<Link className="home-link" to="/">
								{home}
							</Link>
						</li>
						<li>
							{' '}
							<Link className="about-link" to="/about">
								{about}
							</Link>
						</li>
						<li>
							{' '}
							<Link className="models-link" to="/models">
								{vehicle_Models}
							</Link>
						</li>
						<li>
							{' '}
							<Link className="testi-link" to="/testimonials">
								{testimonials}
							</Link>
						</li>
						<li>
							{' '}
							<Link className="team-link" to="/team">
								{our_team}
							</Link>
						</li>
						<li>
							{' '}
							<Link className="contact-link" to="/contact">
								{contact}
							</Link>
						</li>
					</ul>
					<div className="navbar__buttons">
						<LanguageSelect />

						<button
							className="navbar__buttons__sign-in"
							onClick={() => handleAuthModalOpen('login')}
						>
							Sign In
						</button>
						<button
							className="navbar__buttons__register"
							onClick={() => handleAuthModalOpen('register')}
						>
							Register
						</button>
					</div>

					{/* mobile */}
					<div className="mobile-hamb" onClick={openNav}>
						<IconMenu2 width={30} height={30} />
					</div>
				</div>
			</nav>

			{isAuthModalOpen && (
				<AuthModal
					isOpen={isAuthModalOpen}
					onClose={handleAuthModalClose}
					mode={authMode}
				/>
			)}
		</>
	);
}

export default Navbar;
