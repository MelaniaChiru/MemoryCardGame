const LevelPage = () => {
	//data
	const tiles = [
		{icon: "/icons/water_drop.svg", id: 1, nbTiles: 2},
        {icon: "/icons/tool.svg", id: 2, nbTiles: 2},
        {icon: "/icons/sun.svg", id: 3, nbTiles: 2},
        {icon: "/icons/dirt.svg", id: -1, nbTiles: 3}
	];

	const [resources, setResources] = React.useState([
        {icon: "/icons/water_drop_gray.svg", qty: 1},
        {icon: "/icons/tool_gray.svg",  qty: 1},
        {icon: "/icons/sun_gray.svg", qty: 1}
    ]);

	return ( 
		<div className="level-page">
			<div className="main-column">
				<Header level="1"></Header>
				<Grid tiles={tiles} resources={resources} setResources={setResources}></Grid>
			</div>
			<div className="side-column">
				<Resources resources={resources}></Resources>
				<Plant></Plant>
			</div>
		</div>
	 );
}