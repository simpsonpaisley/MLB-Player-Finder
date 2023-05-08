const express = require('express');
const cors = require('cors');
const playerData = require('./data/playerData.json');

require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.get('/', (request, response) => {
	response.json('You are in the root endpoint of MLB Player Finder');
});

app.get('/teams/american', (request, response) => {
	const { searchQuery } = request.query;

	let teamData;
	for (const league of playerData.data.leagues) {
		for (const area of league.areas) {
			const team = area.teams.find(
				(team) => team.search.toLowerCase() === searchQuery.toLowerCase()
			);

			if (team) {
				teamData = team;
				break;
			}
		}
		if (teamData) break;
	}
	response.json(teamData);
});

app.listen(PORT, () => {
	console.log('App is listening on Port ' + PORT);
});
