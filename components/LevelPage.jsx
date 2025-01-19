const LevelPage = () => {
    // data for tiles
    const tiles = [
        { icon: "/icons/water_drop.svg", id: 1, nbTiles: 2 },
        { icon: "/icons/tool.svg", id: 2, nbTiles: 2 },
        { icon: "/icons/sun.svg", id: 3, nbTiles: 2 },
        { icon: "/icons/dirt.svg", id: -1, nbTiles: 3 }
    ];

    const [resources, setResources] = React.useState([
        { icon: "/icons/water_drop_gray.svg", qty: 1 },
        { icon: "/icons/tool_gray.svg", qty: 1 },
        { icon: "/icons/sun_gray.svg", qty: 1 }
    ]);
    
    // State to store shuffled tiles
    const [shuffledTiles, setShuffledTiles] = React.useState([]);

    // Shuffle the tiles only when the page is loaded
    React.useEffect(() => {
        const allTiles = [];
        
        tiles.forEach(tile => {
            for (let i = 0; i < tile.nbTiles; i++) {
                allTiles.push(tile);
            }
        });

        // Shuffle tiles
        shuffleTiles(allTiles);
        
        // Update shuffledTiles state
        setShuffledTiles(allTiles);
        
    }, []); 

    // Function to shuffle tiles
    function shuffleTiles(tiles){
        for (let i = tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Get random index
            [tiles[i], tiles[j]] = [tiles[j], tiles[i]]; // Swap elements
        }
    };

    /**
     * Changes the colour of the icon corresponding with the tiles that just matched
     * @param {String} id id of the tiles that just matched
     */
    function fillIcons(id) {
        if (id === '1') { // water
            setResources(prevResources => {
                return prevResources.map(resource => {
                    if (resource.icon === "/icons/water_drop_gray.svg") {
                        return { ...resource, icon: "/icons/water_drop.svg" };
                    }
                    return resource;
                });
            });
        }
        if (id === '2') { // tool
            setResources(prevResources => {
                return prevResources.map(resource => {
                    if (resource.icon === "/icons/tool_gray.svg") {
                        return { ...resource, icon: "/icons/tool.svg" };
                    }
                    return resource;
                });
            });
        }
        if (id === '3') { // sun
            setResources(prevResources => {
                return prevResources.map(resource => {
                    if (resource.icon === "/icons/sun_gray.svg") {
                        return { ...resource, icon: "/icons/sun.svg" };
                    }
                    return resource;
                });
            });
        }
    }

    const [plantLevel, setPlantLevel] = React.useState(1);

    
    return (
        <div className="level-page">
            <div className="main-column">
                <Header level="1"></Header>
                <Grid tiles={shuffledTiles} fillIcons={fillIcons} setPlantLevel={setPlantLevel}/>
            </div>
            <div className="side-column">
                <Resources resources={resources}></Resources>
                <Plant plantLevel={plantLevel}></Plant>
            </div>
        </div>
    );
};
