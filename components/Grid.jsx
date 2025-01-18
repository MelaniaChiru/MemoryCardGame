const Grid = ({tiles}) => {
	return ( 
		<div className="tiles-grid">
			{hydrateTiles()}
		</div>
	);

	function hydrateTiles(){
		let allTiles = [];
		
		tiles.forEach(tile => {
			for (let i = 0; i < tile.nbTiles; i++){
				allTiles.push(tile);
			}
		});

		shuffleTiles(allTiles);

		return allTiles.map(tile=>{
			return (<Tile id={tile.id} icon={tile.icon}></Tile>);
		});

		/**
		 * 'Shuffles' the tiles, so the order is different
		 * @param {Array} tiles array of the all the tiles
		 * @returns the array of tiles, but in a randomized order
		 */
		function shuffleTiles(tiles) {
			for (let i = tiles.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1)); // Get random index
				[tiles[i], tiles[j]] = [tiles[j], tiles[i]]; // Swap elements
			}
			return tiles;
		}
		
	}
}