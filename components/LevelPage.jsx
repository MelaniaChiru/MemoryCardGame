const LevelPage = () => {
    // data for tiles
    let level = 1;
    let tiles;
    let [resources, setResources] = React.useState([{ icon: "/icons/water_drop_gray.svg", qty: 1 },]);
    if(level == 1) {
        tiles = Level1().tiles;
        [resources, setResources] = React.useState([Level1().resources[0], Level1().resources[1], Level1().resources[2]]);
    }else {
        tiles = Level2().tiles;
        [resources, setResources] = React.useState([Level2().resources[0], Level2().resources[1], Level2().resources[2]]);
    }

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

    const [levelCompleted, setLevelCompleted] = React.useState(false);
    const [levelPageClasses, setlevelPageClasses] = React.useState("level-page");

    React.useEffect(() => {
        if (plantLevel === 4) {
            console.log('level done');
            setLevelCompleted(true);
            setlevelPageClasses("level-page blured");

        }
    }, [plantLevel]);

    
    return (
        <>
            <div className={levelPageClasses}>
                <div className="main-column">
                    <Header level={level}></Header>
                    <Grid tiles={shuffledTiles} fillIcons={fillIcons} setPlantLevel={setPlantLevel}/>
                </div>
                <div className="side-column">
                    <Resources resources={resources}></Resources>
                    <Plant plantLevel={plantLevel}></Plant>
                </div>
            </div>

           {levelCompleted && <EndPage classes="pop-up pop-up--small" playAgain={()=>{console.log("Play Again")}} nextLevel={()=>{console.log("Next Level")}}></EndPage>}
        </>
    );
};
