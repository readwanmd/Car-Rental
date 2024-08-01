import { useTranslation } from 'react-i18next';

function ModelPrice({ price }) {
	const { t } = useTranslation('carModels');
	const { per_day } = t('cars');

	return (
		<div className="models-div__box__descr__name-price__price">
			<h4>${price}</h4>
			<p>{per_day}</p>
		</div>
	);
}

export default ModelPrice;
