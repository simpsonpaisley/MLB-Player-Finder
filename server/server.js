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

app.get('/leagues', (request, response) => {
	response.json(playerData.data.leagues);
});

app.listen(PORT, () => {
	console.log('App is listening on Port ' + PORT);
});