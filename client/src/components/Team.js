function Team({
	teamName,
	teamColourOne,
	teamColourTwo,
	teamStadium,
	teamLogo,
	teamLocation,
	teamRoster,
	teamPitchers,
	teamCatchers,
	teamDH,
	teamInfielders,
	teamOutfielders,
}) {
	return (
		<div className="teamInfoDisplay">
			<h1>{teamName}</h1>
			<p>{teamColourOne}</p>
			<p>{teamColourTwo}</p>
			<p>{teamStadium}</p>
			<img
				src={teamLogo}
				alt=""></img>
		</div>
	);
}

export default Team;
