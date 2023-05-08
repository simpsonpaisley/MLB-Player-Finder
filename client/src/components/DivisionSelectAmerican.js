import { useEffect, useState } from 'react';
import Axios from 'axios';
import whitesox from '../images/whitesox.png';
import guardians from '../images/guardians.png';
import tigers from '../images/tigers.png';
import royals from '../images/royals.png';
import twins from '../images/twins.png';
import orioles from '../images/orioles.png';
import redsox from '../images/redsox.png';
import yankees from '../images/yankees.png';
import rays from '../images/rays.png';
import bluejays from '../images/bluejays.png';
import astros from '../images/astros.png';
import angels from '../images/angels.png';
import oakland from '../images/oakland.png';
import mariners from '../images/mariners.png';
import rangers from '../images/rangers.png';
import Team from './Team';

function DivisionSelectAmerican({ americanLeagueSelect }) {
	const [teamName, setTeamName] = useState('');
	const [teamStadium, setTeamStadium] = useState('');
	const [teamLocation, setTeamLocation] = useState('');
	const [teamColourOne, setTeamColourOne] = useState('');
	const [teamColourTwo, setTeamColourTwo] = useState('');
	const [teamLogo, setTeamLogo] = useState('');
	const [teamRoster, setTeamRoster] = useState({});
	const [teamPitchers, setTeamPitchers] = useState([]);
	const [teamInfielders, setTeamInfielders] = useState([]);
	const [teamOutfielders, setTeamOutfielders] = useState([]);
	const [teamCatchers, setTeamCatchers] = useState([]);
	const [teamDH, setTeamDH] = useState([]);
	const [teamShow, setTeamShow] = useState(false);

	async function teamSelectHandler(searchQuery) {
		const teamAPI =
			'http://localhost:1995/teams/american?searchQuery=' + searchQuery;
		const response = await Axios.get(teamAPI);
		console.log(response);

		setTeamName(response.data.teamName);
		setTeamStadium(response.data.homeStadium);
		setTeamLocation(response.data.location);
		setTeamColourOne(response.data.colour1);
		setTeamColourTwo(response.data.colour2);
		setTeamLogo(response.data.logoImg);
		setTeamRoster(response.data.roster);
		setTeamPitchers(response.data.roster.pitchers.pitchersArr);
		setTeamInfielders(response.data.roster.infielders.infieldersArr);
		setTeamOutfielders(response.data.roster.outfielders.outfieldersArr);
		setTeamCatchers(response.data.roster.catchers.catchersArr);
		setTeamDH(response.data.roster.designatedHitter.designatedHitterArr);

		setTeamShow(!teamShow);
	}
	return (
		<div className="divisionSelectBackground">
			<div className="divisionSelect">
				<div className="modalHeader">
					<h2>Choose a Team</h2>
					<button onClick={americanLeagueSelect}>X</button>
				</div>
				<div className="divisionDisplay">
					<hr></hr>
					<h3>American League Central</h3>
					<div className="divisionTeamDisplay">
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('whitesox')}>
							<img
								src={whitesox}
								alt="white sox"></img>
							<h4>Chicago White Sox</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('guardians')}>
							<img
								src={guardians}
								alt="guardians"></img>
							<h4>Cleveland Guardians</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('tigers')}>
							<img
								src={tigers}
								alt="tigers"></img>
							<h4>Detroit Tigers</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('royals')}>
							<img
								src={royals}
								alt="royals"></img>
							<h4>Kansas City Royals</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('twins')}>
							<img
								src={twins}
								alt="twins"></img>
							<h4>Minnesota Twins</h4>
						</div>
					</div>
				</div>
				<div className="divisionDisplay">
					<hr></hr>
					<h3>American League East</h3>
					<div className="divisionTeamDisplay">
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('orioles')}>
							<img
								src={orioles}
								alt="orioles"></img>
							<h4>Baltimore Orioles</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('redsox')}>
							<img
								src={redsox}
								alt="redsox"></img>
							<h4>Boston Red Sox</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('yankees')}>
							<img
								src={yankees}
								alt="yankees"></img>
							<h4>New York Yankees</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('rays')}>
							<img
								src={rays}
								alt="rays"></img>
							<h4>Tampa Bay Rays</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('bluejays')}>
							<img
								src={bluejays}
								alt="bluejays"></img>
							<h4>Toronto Blue Jays</h4>
						</div>
					</div>
				</div>
				<div className="divisionDisplay">
					<hr></hr>
					<h3>American League West</h3>
					<div
						className="divisionTeamDisplay"
						onClick={() => teamSelectHandler('astros')}>
						<div className="teamDisplay">
							<img
								src={astros}
								alt="astros"></img>
							<h4>Houston Astros</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('angels')}>
							<img
								src={angels}
								alt="angels"></img>
							<h4>Los Angeles Angels</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('oakland')}>
							<img
								src={oakland}
								alt="oakland"></img>
							<h4>Oakland Athletics</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('mariners')}>
							<img
								src={mariners}
								alt="mariners"></img>
							<h4>Seattle Mariners</h4>
						</div>
						<div
							className="teamDisplay"
							onClick={() => teamSelectHandler('rangers')}>
							<img
								src={rangers}
								alt="rangers"></img>
							<h4>Texas Rangers</h4>
						</div>
					</div>
				</div>
			</div>
			<div className="teamDisplaySpace">
				{teamShow && (
					<Team
						teamName={teamName}
						teamStadium={teamStadium}
						teamColourOne={teamColourOne}
						teamColourTwo={teamColourTwo}
						teamLocation={teamLocation}
						teamLogo={teamLogo}
						teamRoster={teamRoster}
						teamPitchers={teamPitchers}
						teamCatchers={teamCatchers}
						teamDH={teamDH}
						teamInfielders={teamInfielders}
						teamOutfielders={teamOutfielders}
					/>
				)}
			</div>
		</div>
	);
}

export default DivisionSelectAmerican;
