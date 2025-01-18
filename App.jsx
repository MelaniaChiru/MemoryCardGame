const App = () => {
	return ( 
		<>
			<Header level="1"/>
			<Tile id={1} icon="/icons/water_drop.svg"></Tile>
		</>
	 );
}

//render content
ReactDOM.render(<App />,document.getElementById("body"));