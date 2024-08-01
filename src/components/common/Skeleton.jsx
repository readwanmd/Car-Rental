import '../../styles/Skeleton.css';

const Skeleton = () => {
	return (
		<div className="skeleton-container">
			<div className="skeleton-text skeleton-title"></div>
			<div className="skeleton-text skeleton-subtitle"></div>
			<div className="skeleton-button skeleton-button-1"></div>
			<div className="skeleton-button skeleton-button-2"></div>
			<div className="skeleton-car"></div>
		</div>
	);
};

export default Skeleton;
