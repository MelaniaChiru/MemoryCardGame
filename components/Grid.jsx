const Grid = ({tiles, fillIcons, setPlantLevel, gameLevel}) => {
	let count = 0;
	let selectedTiles = []; // the two tiles selected
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
		return tiles.map(tile=>{
			return (<Tile onClick={(e)=>{tileHandler(e)}} id={tile.id} icon={tile.icon}></Tile>);
		});
	}
		
	function tileHandler(e) {
		if(e.target.children[0] != undefined) {
			if(count < 2) {
				if(e.target.children[0].classList == "hidden") {
					e.target.children[0].classList.remove("hidden");
					count = count + 1;
					eventTile.push(e);
					selectedTiles.push(e.target.id);
				}else {
					console.log("Already selected");
				}
			}
		}			

        if (count == 2) {
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

			//update level at which the plant is
			if(gameLevel === 1){
				setPlantLevel(prevLevel=>{
					return prevLevel + 1;
				});
			}

			if (gameLevel === 2) {
				setPlantLevel(prevLevel=>{
					return prevLevel + 0.5;
				});
			}

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
}