import ModelCard from './ModelCard';
import useModelData from './modelData';

const ModelCards = () => {
	const { modelData } = useModelData();
	return (
		<>
			{modelData.map((model, index) => (
				<ModelCard key={index} model={model} />
			))}
		</>
	);
};
export default ModelCards;
