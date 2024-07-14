const planCard = ({ cardInfo: { icon, title, desc } }) => {
	return (
		<div className="plan-container__boxes__box">
			<img src={icon} alt="icon_img" />
			<h3>{title}</h3>
			<p>{desc}</p>
		</div>
	);
};
export default planCard;
