import { HeroPages } from '../components';
import BookingBanner from '../components/common/BookingBanner';
import ModelCards from '../components/models/ModelCards';

function Models() {
	return (
		<>
			<section className="models-section">
				<HeroPages name="Vehicle Models" />
				<div className="container">
					<div className="models-div">
						<ModelCards />
					</div>
				</div>
				<BookingBanner />
			</section>
		</>
	);
}

export default Models;
