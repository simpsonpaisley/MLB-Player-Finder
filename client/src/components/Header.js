import Logo from '../images/logo.svg';

function Header() {
	return (
		<div className="header">
			<img
				src={Logo}
				alt="baseball"
			/>
			<h1>MLB Player Finder</h1>
		</div>
	);
}

export default Header;
