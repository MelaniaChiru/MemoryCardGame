const LevelPage = () => {
	const {tiles, resources} = Level1();	
	
	return ( 
		<div className="level-page">
			<div className="main-column">
				<Header level="1"></Header>
				<Grid tiles={tiles}></Grid>
			</div>
			<div className="side-column">
				<Resources resources={resources}></Resources>
				<Plant></Plant>
			</div>
		</div>
	 );
}