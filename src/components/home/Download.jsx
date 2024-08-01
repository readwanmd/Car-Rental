import { useTranslation } from 'react-i18next';
import { appstore, playStore } from '/public/';

const Download = () => {
	const { t } = useTranslation('download');

	const section_title = t('section_title');
	const subtitle = t('subtitle');

	return (
		<section className="download-section">
			<div className="container">
				<div className="download-text">
					<h2>{section_title}</h2>
					<p>{subtitle}</p>
					<div className="download-text__btns">
						<img alt="download_img" src={appstore} />
						<img alt="download_img" src={playStore} />
					</div>
				</div>
			</div>
		</section>
	);
};
export default Download;
