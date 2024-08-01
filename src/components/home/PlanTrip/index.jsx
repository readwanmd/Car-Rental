import { useTranslation } from 'react-i18next';
import PlanCard from './PlanCard';
import usePlanCardData from './planCardData';

const PlanTrip = () => {
	const { planCardData } = usePlanCardData();
	const { t } = useTranslation('planTrip');
	const line1 = t('line1');
	const section_title = t('section_title');

	return (
		<>
			<section className="plan-section">
				<div className="container">
					<div className="plan-container">
						<div className="plan-container__title">
							<h3>{line1}</h3>
							<h2>{section_title}</h2>
						</div>

						<div className="plan-container__boxes">
							{planCardData.map((plan) => (
								<PlanCard key={plan.title} cardInfo={plan} />
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default PlanTrip;
