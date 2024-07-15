import { HeroPages } from '../components';
import BookBanner from '../components/about/BookBanner';
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
				<BookBanner />
			</section>
		</>
	);
}

export default Models;
