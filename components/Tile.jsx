const Tile = (props) => {
	return ( 
		<div className="tile" id={props.id} onClick={props.onClick} >
			<img src={props.icon} class="hidden"/>
		</div>
	 );

	 

}