import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
	return (
		<div>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
