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
        tiles.forEach((tile)=> {tile.children[0].classList.add("hidden")});
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

    // Update resources based on matched tiles
    function fillIcons(id) {
        setResources(prevResources =>
            prevResources.map(resource => {
                if (resource.icon.includes(`${id}_gray`)) {
                    return { ...resource, icon: resource.icon.replace("_gray", "") };
                }
                return resource;
            })
        );
    }

    // Handle level completion
    React.useEffect(() => {
        if (plantLevel === 4) {
            setLevelCompleted(true);
            setLevelPageClasses("level-page blured");
        }
    }, [plantLevel]);

    return (
        <>
            <div className={levelPageClasses}>
                <div className="main-column">
                    <Header level={gameLevel} />
                    <Grid tiles={shuffledTiles} fillIcons={fillIcons} setPlantLevel={setPlantLevel} />
                </div>
                <div className="side-column">
                    <Resources resources={resources} />
                    <Plant plantLevel={plantLevel} />
                </div>
            </div>

            {levelCompleted && (
                <EndPage classes="pop-up pop-up--small" playAgain={playAgain} nextLevel={nextLevel} />
            )}
        </>
    );
};
