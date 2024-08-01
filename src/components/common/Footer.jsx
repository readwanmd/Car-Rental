import { IconMail, IconPhoneCall } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import LanguageSelect from './LanguageSelect';

function Footer() {
	const { t } = useTranslation('footer');
	const desc = t('desc');
	const working_hours = t('working_hours');
	const company = t('company');
	const subscription = t('subscription');
	return (
		<>
			<footer>
				<div className="container">
					<div className="footer-content">
						<ul className="footer-content__1">
							<li>
								<span>CAR</span> Rental
							</li>
							<li>{desc}</li>
							<li>
								<a href="tel:123456789">
									<IconPhoneCall /> &nbsp; (123) -456-789
								</a>
							</li>

							<li>
								<a
									href="mailto: 
                carrental@gmail.com"
								>
									<IconMail />
									&nbsp; carrental@gmail.com
								</a>
							</li>
						</ul>

						<ul className="footer-content__2">
							<li>{company.title}</li>
							<li>
								<a href="#home">{company.li1}</a>
							</li>
							<li>
								<a href="#home">{company.li2}</a>
							</li>
							<li>
								<a href="#home">{company.li3}</a>
							</li>
							<li>
								<a href="#home">{company.li4}</a>
							</li>
							<li>
								<a href="#home">{company.li5}</a>
							</li>
						</ul>

						<ul className="footer-content__2">
							<li>{working_hours.title}</li>
							<li>{working_hours.li1}</li>
							<li>{working_hours.li2}</li>
							<li>{working_hours.li3}</li>
							<li>
								<LanguageSelect />
							</li>
						</ul>

						<ul className="footer-content__2">
							<li>{subscription.title}</li>
							<li>
								<p>{subscription.subtitle}</p>
							</li>
							<li>
								<input
									type="email"
									placeholder={subscription.placeholder}
								></input>
							</li>
							<li>
								<button className="submit-email">{subscription.submit}</button>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
