const Tile = (props) => {
	return ( 
		<div className="tile" id={props.id}>
			<img src={props.icon}/>
		</div>
	 );
}