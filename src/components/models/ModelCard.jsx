import { IconStar } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ModelDetails from './ModelDetails';
import ModelPrice from './ModelPrice';

function ModelCard({ model }) {
	const { t } = useTranslation('carModels');
	const { book_ride } = t('cars');
	return (
		<div className="models-div__box">
			<div className="models-div__box__img">
				<img src={model.img} alt="car_img" />
				<div className="models-div__box__descr">
					<div className="models-div__box__descr__name-price">
						<div className="models-div__box__descr__name-price__name">
							<p>{model.name}</p>
							<span>
								<IconStar width={15} height={15} />
								<IconStar width={15} height={15} />
								<IconStar width={15} height={15} />
								<IconStar width={15} height={15} />
								<IconStar width={15} height={15} />
							</span>
						</div>
						<ModelPrice price={model.price} />
					</div>
					<ModelDetails
						make={model.make}
						seats={model.seats}
						transmission={model.transmission}
						fuel={model.fuel}
					/>
					<div className="models-div__box__descr__name-price__btn">
						<Link to="/">{book_ride}</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModelCard;
