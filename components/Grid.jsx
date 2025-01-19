const Grid = ({tiles, resources, setResources}) => {
	let count = 0;
	let t = [];
	let eventTile = [];

	return ( 
		<div className="tiles-grid">
			{hydrateTiles()}
		</div>
	);

	/**
	 * takes array of tiles from data file, shuffles them and displays them
	 * @returns array of Tiles
	 */
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

	function tileHandler(e) {
		if(count < 2) {
			e.target.children[0].classList.remove("hidden");
			count = count + 1;
			eventTile.push(e);
			t.push(e.target.id);
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
			//colour appropriate icons in resources
			fillIcons(eventTile[0].target.id);

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
	 * When a pair of tiles is matched, the corresponding resource icon is filled in with colour
	 * @param {String} id id of the tiles that were just matched
	 */
	function fillIcons(id){
		if (id === '1'){ // water
			setResources(prevResources => {
				return prevResources.map(resource => {
					if (resource.icon === "/icons/water_drop_gray.svg") {
						// Change the water icon only
						return { ...resource, icon: "/icons/water_drop.svg" };
					}
					return resource; 
				});
			});
		}

		if (id === '2'){ // tool
			setResources(prevResources => {
				return prevResources.map(resource => {
					if (resource.icon === "/icons/tool_gray.svg") {
						// Change the tool icon only
						return { ...resource, icon: "/icons/tool.svg" };
					}
					return resource; 
				});
			});
		}

		if (id === '3'){ // sun
			setResources(prevResources => {
				return prevResources.map(resource => {
					if (resource.icon === "/icons/sun_gray.svg") {
						// Change the sun icon only
						return { ...resource, icon: "/icons/sun.svg" };
					}
					return resource; 
				});
			});
		}
		
    }
}