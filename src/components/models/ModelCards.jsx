import ModelCard from './ModelCard';
import { modelData } from './modelData';

const ModelCards = () => {
	return (
		<>
			{modelData.map((model, index) => (
				<ModelCard key={index} model={model} />
			))}
		</>
	);
};
export default ModelCards;
