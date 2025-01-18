const App = () => {
	let icons = Level1();
	return ( 
		<>
<<<<<<< HEAD
			<WelcomePage />
			<Header level="1"/>
=======
			{/* <Header level="1"/>
>>>>>>> 541229c (feat: create component for the level page)
			<Tile id={1} icon="/icons/water_drop.svg"></Tile>
			<Plant />

<<<<<<< HEAD
			<Resources/>
			<Rules />
=======
			<Resources/> */}
			<LevelPage></LevelPage>
>>>>>>> 541229c (feat: create component for the level page)
		</>
	 );
}

//render content
ReactDOM.render(<App />,document.getElementById("body"));

