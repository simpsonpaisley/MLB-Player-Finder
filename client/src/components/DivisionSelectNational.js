import Axios from 'axios';
import cubs from '../images/cubs.png';
import reds from '../images/reds.png';
import brewers from '../images/brewers.png';
import pirates from '../images/pirates.png';
import cardinals from '../images/cardinals.png';
import braves from '../images/braves.png';
import marlins from '../images/marlins.png';
import mets from '../images/mets.png';
import phillies from '../images/phillies.png';
import washington from '../images/washington.png';
import diamondbacks from '../images/diamondbacks.png';
import rockies from '../images/rockies.png';
import dodgers from '../images/dodgers.png';
import padres from '../images/padres.png';
import giants from '../images/giants.png';

function DivisionSelectNational({ nationalLeagueSelect }) {
	async function teamSelectHandler(searchQuery) {
		const teamAPI =
			'http://localhost:1995/teams/american?searchQuery=' + searchQuery;
		const response = await Axios.get(teamAPI);
		console.log(response);
	}
	return (
		<div className="divisionSelectBackground">
			<div className="divisionSelect">
				<div className="modalHeader">
					<h2>Choose a Team</h2>
					<button onClick={nationalLeagueSelect}>X</button>
				</div>
				<div className="divisionDisplay">
					<hr></hr>
					<h3>National League Central</h3>
					<div className="divisionTeamDisplay">
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('cubs')}>
							<img
								src={cubs}
								alt="cubs"></img>
							<h4>Chicago Cubs</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('reds')}>
							<img
								src={reds}
								alt="reds"></img>
							<h4>Cincinnati Reds</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('brewers')}>
							<img
								src={brewers}
								alt="brewers"></img>
							<h4>Milwaukee Brewers</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('pirates')}>
							<img
								src={pirates}
								alt="pirates"></img>
							<h4>Pittsburgh Pirates</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('cardinals')}>
							<img
								src={cardinals}
								alt="cardinals"></img>
							<h4>St. Louis Cardinals</h4>
						</div>
					</div>
				</div>
				<div className="divisionDisplay">
					<hr></hr>
					<h3>National League East</h3>
					<div className="divisionTeamDisplay">
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('braves')}>
							<img
								src={braves}
								alt="braves"></img>
							<h4>Atlanta Braves</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('marlins')}>
							<img
								src={marlins}
								alt="marlins"></img>
							<h4>Miami Marlins</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('mets')}>
							<img
								src={mets}
								alt="mets"></img>
							<h4>New York Mets</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('phillies')}>
							<img
								src={phillies}
								alt="phillies"></img>
							<h4>Philadelphia Phillies</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('washington')}>
							<img
								src={washington}
								alt="washington"></img>
							<h4>Washington Nationals</h4>
						</div>
					</div>
				</div>
				<div className="divisionDisplay">
					<hr></hr>
					<h3>National League West</h3>
					<div className="divisionTeamDisplay">
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('diamondbacks')}>
							<img
								src={diamondbacks}
								alt="diamondbacks"></img>
							<h4>Arizona Diamondbacks</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('rockies')}>
							<img
								src={rockies}
								alt="rockies"></img>
							<h4>Colorado Rockies</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('dodgers')}>
							<img
								src={dodgers}
								alt="dodgers"></img>
							<h4>Los Angeles Dodgers</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('padres')}>
							<img
								src={padres}
								alt="padres"></img>
							<h4>San Diego Padres</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('giants')}>
							<img
								src={giants}
								alt="giants"></img>
							<h4>San Francisco Giants</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DivisionSelectNational;
