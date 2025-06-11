export function flipTile(){
	let grid = document.querySelector('.grid');

	let tiles = Array.from(grid.children);

	tiles.forEach(tile=>{
		tile.addEventListener('click', ()=>{
			tile.children[0].classList.toggle('flipped');
		});
	});
	

}