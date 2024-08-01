function TeamMember({ person }) {
	return (
		<div className="team-container__box">
			<div className="team-container__box__img-div">
				<img src={person.img} alt="team_img" />
			</div>
			<div className="team-container__box__descr">
				<h3>{person.name}</h3>
				<p>{person.job}</p>
			</div>
		</div>
	);
}

export default TeamMember;
