const Grid = ({tiles}) => {
	let count = 0;
	let t = [];
	let eventTile = [];
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
			return (<Tile onClick={(e)=>{tileHandler(e)}} id={tile.id} icon={tile.icon}></Tile>);
		});

		
		function tileHandler(e) {
			if(e.target.children[0] != undefined) {
				if(count < 2) {
					if(e.target.children[0].classList == "hidden") {
						e.target.children[0].classList.remove("hidden");
						count = count + 1;
						eventTile.push(e);
						t.push(e.target.id);
					}else {
						console.log("Already selected");
					}
				}
			}			

			if(count == 2) {
				checkTiles();
			}
		}

		function checkTiles() {
			if(eventTile[0].target.id == eventTile[1].target.id && eventTile[0].target.id < 0) {
				setTimeout(()=> {
					eventTile[0].target.children[0].classList.add("hidden");
					eventTile[1].target.children[0].classList.add("hidden");
					count = 0;
					eventTile = [];
				}, 500);
			}else if(eventTile[0].target.id == eventTile[1].target.id) {
				console.log("it worked");
				count = 0;
				eventTile = [];
			}else {
				setTimeout(()=> {
					eventTile[0].target.children[0].classList.add("hidden");
					eventTile[1].target.children[0].classList.add("hidden");
					count = 0;
					eventTile = [];
				}, 500);
			}
		}




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