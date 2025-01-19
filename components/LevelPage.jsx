const LevelPage = () => {
    // State for game level
    const [gameLevel, setGameLevel] = React.useState(1);

    // State for resources and shuffled tiles
    const [resources, setResources] = React.useState([]);
    const [shuffledTiles, setShuffledTiles] = React.useState([]);

    // Plant and level completion state
    const [plantLevel, setPlantLevel] = React.useState(1);
    const [levelCompleted, setLevelCompleted] = React.useState(false);
    const [levelPageClasses, setLevelPageClasses] = React.useState("level-page");

    // State for tracking pairs of icons
    const [waterPairs, setWaterPairs] = React.useState(0);
    const [toolPairs, setToolPairs] = React.useState(0);
    const [sunPairs, setSunPairs] = React.useState(0);

    // Initialize the game state whenever the gameLevel changes
    React.useEffect(() => {
        initializeGame(gameLevel);
    }, [gameLevel]);

    function initializeGame(level) {
        const levelData = level === 1 ? Level1() : Level2();
        const tiles = levelData.tiles;

        resetTiles();

        // Prepare resources and shuffle tiles
        setResources(levelData.resources.map(resource => ({ ...resource })));
        setShuffledTiles(shuffleTiles(tiles.flatMap(tile => Array(tile.nbTiles).fill(tile))));
        setPlantLevel(1);
        setLevelCompleted(false);
        setLevelPageClasses("level-page");
    }

    function resetTiles() {
        let tiles = document.querySelectorAll(".tile");
        tiles.forEach((tile) => { tile.children[0].classList.add("hidden"); });
    }

    // Shuffle tiles
    function shuffleTiles(tiles) {
        for (let i = tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
        }
        return tiles;
    }

    // Handle play again
    function playAgain() {
        initializeGame(gameLevel);
    }

    // Handle next level
    function nextLevel() {
        setGameLevel(prev => prev + 1);
    }

    function prevLevel() {
        setGameLevel(prev => prev - 1);
    }

    /**
     * Changes the colour of the icon corresponding with the tiles that just matched
     * @param {String} id id of the tiles that just matched
     */
    function fillIcons(id) {
        if (gameLevel === 1) {
            // Handle matching for level 1
            if (id === '1') { // water
                setResources(prevResources => prevResources.map(resource => {
                    if (resource.icon === "icons/water_drop_gray.svg") {
                        return { ...resource, icon: "icons/water_drop.svg" };
                    }
                    return resource;
                }));
            }
            if (id === '2') { // tool
                setResources(prevResources => prevResources.map(resource => {
                    if (resource.icon === "icons/tool_gray.svg") {
                        return { ...resource, icon: "icons/tool.svg" };
                    }
                    return resource;
                }));
            }
            if (id === '3') { // sun
                setResources(prevResources => prevResources.map(resource => {
                    if (resource.icon === "icons/sun_gray.svg") {
                        return { ...resource, icon: "icons/sun.svg" };
                    }
                    return resource;
                }));
            }
        }

        if (gameLevel === 2) {
            // Handle matching for level 2 and increment pair counts
            if (id === '1') setWaterPairs(prevPairs => prevPairs + 1);
            if (id === '2') setToolPairs(prevPairs => prevPairs + 1);
            if (id === '3') setSunPairs(prevPairs => prevPairs + 1);
        }
    }

    // Update resource icons based on pair counts
    React.useEffect(() => {
        setResources(prevResources => prevResources.map(resource => {
            let updatedResource = { ...resource };

            // Handle water icon updates
            if (waterPairs === 1 && resource.icon === "icons/water_drop_gray.svg") {
                updatedResource.icon = "icons/water_drop_half.svg";
            } else if (waterPairs === 2 && resource.icon === "icons/water_drop_half.svg") {
                updatedResource.icon = "icons/water_drop.svg";
            }

            // Handle tool icon updates
            if (toolPairs === 1 && resource.icon === "icons/tool_gray.svg") {
                updatedResource.icon = "icons/tool_half.svg";
            } else if (toolPairs === 2 && resource.icon === "icons/tool_half.svg") {
                updatedResource.icon = "icons/tool.svg";
            }

            // Handle sun icon updates
            if (sunPairs === 1 && resource.icon === "icons/sun_gray.svg") {
                updatedResource.icon = "icons/sun_half.svg";
            } else if (sunPairs === 2 && resource.icon === "icons/sun_half.svg") {
                updatedResource.icon = "icons/sun.svg";
            }

            return updatedResource;
        }));
    }, [waterPairs, toolPairs, sunPairs]); // Re-run when any pair count changes

    // Handle level completion
    React.useEffect(() => {
        if (plantLevel === 4) {
            setTimeout(() => {
                setLevelCompleted(true);
                setLevelPageClasses("level-page blured");
            }, 1000);
        }
    }, [plantLevel]);

    let levelClassName = `level${gameLevel}`;

    return (
        <div className={levelClassName}>
            <div className={levelPageClasses}>
                <div className="main-column">
                    <Header level={gameLevel} />
                    <Grid tiles={shuffledTiles} fillIcons={fillIcons} setPlantLevel={setPlantLevel} gameLevel={gameLevel} />
                </div>
                <div className="side-column">
                    <Resources resources={resources} />
                    <Plant plantLevel={plantLevel} />
                </div>
            </div>

            {levelCompleted && (
                <EndPage classes="pop-up pop-up--small" playAgain={playAgain} nextLevel={nextLevel} prevLevel={prevLevel} gameLevel={gameLevel}/>
            )}
        </div>
    );
};
