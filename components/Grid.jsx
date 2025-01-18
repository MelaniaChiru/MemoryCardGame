const Grid = (props) => {
	return ( 
		<div className="tiles-grid">
			{hydrateTiles()}
		</div>
	);

	function hydrateTiles(){
		return props.tiles.map(tile=>{
			return (<Tile id={tile.id} icon={tile.icon}></Tile>);
		});
	}
}