import { rightCardData } from './cardData';
import TextBox from './TextBox';

function TextContainerRight() {
	return (
		<div className="text-container__right">
			{rightCardData.map((card) => (
				<TextBox
					key={crypto.randomUUID()}
					imgSrc={card.img}
					title={card.title}
					description={card.description}
				/>
			))}
		</div>
	);
}

export default TextContainerRight;
