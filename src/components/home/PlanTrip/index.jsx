import PlanCard from './PlanCard';
import { planCardData } from './planCardData';

const PlanTrip = () => {
	return (
		<>
			<section className="plan-section">
				<div className="container">
					<div className="plan-container">
						<div className="plan-container__title">
							<h3>Plan your trip now</h3>
							<h2>Quick & easy car rental</h2>
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
