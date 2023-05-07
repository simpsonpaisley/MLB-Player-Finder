import National from '../images/National.png';
import American from '../images/American.png';

function LeagueSelect() {
	return (
		<div class="leagueSelectHeader">
			<h2>Select a League</h2>
			<div className="leagueSelect">
				<div className="leagueLogo">
					<img
						src={National}
						alt="National League Logo"></img>
					<h3>National League</h3>
				</div>
				<div className="leagueLogo">
					<img
						src={American}
						alt="American League Logo"></img>
					<h3>American League</h3>
				</div>
			</div>
		</div>
	);
}

export default LeagueSelect;
