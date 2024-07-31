import { Trans, useTranslation } from 'react-i18next';

const Banner = () => {
	const { t } = useTranslation('banner');
	const title = t('title');
	const subtitle = t('subtitle');

	return (
		<section className="banner-section">
			<div className="container">
				<div className="banner-content">
					<div className="banner-content__text">
						<h2>{title}</h2>
						<p>
							<Trans i18nKey={subtitle} components={{ 1: <span /> }} />
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Banner;
