function Form() {
	return (
		<div className="form">
			<h2>Search for a Player</h2>
			<form>
				<div className="teamSelect">
					<label for="teamSelect">Team</label>
					<select
						name="teamSelect"
						id="teamSelect"
						required>
						<option
							value=""
							disabled
							selected>
							Select Your Team
						</option>
						<optgroup label="American League Central">
							<option value="whitesox">Chicago White Sox</option>
							<option value="guardians">Cleveland Guardians</option>
							<option value="tigers">Detroit Tigers</option>
							<option value="royals">Kansas City Royals</option>
							<option value="twins">Minnesota Twins</option>
						</optgroup>
						<optgroup label="American League East">
							<option value="orioles">Baltimore Orioles</option>
							<option value="redsox">Boston Red Sox</option>
							<option value="yankees">New York Yankees</option>
							<option value="rays">Tampa Bay Rays</option>
							<option value="jays">Toronto Blue Jays</option>
						</optgroup>
						<optgroup label="American League West">
							<option value="astros">Housten Astros</option>
							<option value="angels">Los Angeles Angels</option>
							<option value="athletics">Oakland Athletics</option>
							<option value="rangers">Texas Rangers</option>
						</optgroup>
						<optgroup label="National League Central">
							<option value="cubs">Chicago Cubs</option>
							<option value="reds">Cincinnati Reds</option>
							<option value="brewers">Milwaukee Brewers</option>
							<option value="pirates">Pittsburgh Pirates</option>
							<option value="cardinals">St. Louis Cardinals</option>
						</optgroup>
						<optgroup label="National League East">
							<option value="braves">Atlanta Braves</option>
							<option value="marlins">Miami Marlins</option>
							<option value="mets">New York Mets</option>
							<option value="phillies">Philadelphia Phillies</option>
							<option value="nationals">Washington Nationals</option>
						</optgroup>
						<optgroup label="National League West">
							<option value="diamondbacks">Arizona Diamondbacks</option>
							<option value="rockies">Colarado Rockies</option>
							<option value="dodgers">Los Angeles Dodgers</option>
							<option value="padres">San Diego Padres</option>
							<option value="giants">San Francisco Giants</option>
						</optgroup>
					</select>
				</div>
				<div className="nameSeach">
					<label for="playerSearch">Search for a Player</label>
					<input
						name="playerSearch"
						id="playerSearch"
						required
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Form;
