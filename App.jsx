const App = () => {
	let icons = Level1();
	return ( 
		<>
			<WelcomePage />
			<Header level="1"/>
			<Tile id={1} icon="/icons/water_drop.svg"></Tile>
			<Plant />

			<Resources/>
			<Rules />
		</>
	 );
}

//render content
ReactDOM.render(<App />,document.getElementById("body"));