import { useState, useEffect } from 'react';
import National from '../images/National.png';

import American from '../images/American.png';

import DivisionSelectAmerican from './DivisionSelectAmerican';
import DivisionSelectNational from './DivisionSelectNational';

function LeagueSelect() {
	const [showAmericanLeague, setShowAmericanLeague] = useState(false);
	const [showNationalLeague, setShowNationalLeague] = useState(false);

	function americanLeagueSelect() {
		setShowAmericanLeague(!showAmericanLeague);
	}

	function nationalLeagueSelect() {
		setShowNationalLeague(!showNationalLeague);
	}

	return (
		<div className="leagueSelectHeader">
			<h2>Select a League</h2>
			<div className="leagueSelect">
				<div
					className="leagueLogo"
					onClick={nationalLeagueSelect}>
					<img
						src={National}
						alt="National League Logo"></img>
					<h3>National League</h3>
				</div>
				<div
					className="leagueLogo"
					onClick={americanLeagueSelect}>
					<img
						src={American}
						alt="American League Logo"></img>
					<h3>American League</h3>
				</div>
			</div>
			{showAmericanLeague && (
				<DivisionSelectAmerican americanLeagueSelect={americanLeagueSelect} />
			)}
			{showNationalLeague && (
				<DivisionSelectNational nationalLeagueSelect={nationalLeagueSelect} />
			)}
		</div>
	);
}

export default LeagueSelect;
