import { teamMembers } from './teamData';
import TeamMember from './TeamMember';

function TeamContainer() {
	return (
		<div className="team-container">
			{teamMembers.map((member, id) => (
				<TeamMember key={id} person={member} />
			))}
		</div>
	);
}

export default TeamContainer;
