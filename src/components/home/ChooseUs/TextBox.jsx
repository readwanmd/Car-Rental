function TextBox({ imgSrc, title, description }) {
	return (
		<div className="text-container__right__box">
			<img src={imgSrc} alt="card image" />
			<div className="text-container__right__box__text">
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default TextBox;
