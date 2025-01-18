const App = () => {
	const [GameStarted, startGame] = React.useState(false);
	return ( 
		<>
			{!GameStarted && <WelcomePage startGame={startGame}></WelcomePage>}
			{GameStarted && <LevelPage></LevelPage>}
		</>
	 );
}

//render content
ReactDOM.render(<App />,document.getElementById("body"));

