const App = () => {
	let icons = Level1();
	return ( 
		<>
			<Header level="1"/>
			<Tile id={1} icon="/icons/water_drop.svg"></Tile>

			<Resources/>
		</>
	 );
}

//render content
ReactDOM.render(<App />,document.getElementById("body"));