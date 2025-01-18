const App = () => {
	let icons = Level1();
	return ( 
		<>
			<WelcomePage></WelcomePage>
			<LevelPage></LevelPage>
		</>
	 );
}

//render content
ReactDOM.render(<App />,document.getElementById("body"));

