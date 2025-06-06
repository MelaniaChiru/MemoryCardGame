const Level2 = () => {
    return {
        tiles: [
            {icon: "icons/water_drop.svg", id: 1, nbTiles: 4},
            {icon: "icons/tool.svg", id: 2, nbTiles: 4},
            {icon: "icons/sun.svg", id: 3, nbTiles: 4},
            {icon: "icons/dirt.svg", id: -1, nbTiles: 4}
        ],
        resources: [
            { icon: "icons/water_drop_gray.svg", qty: 2 },
            { icon: "icons/tool_gray.svg", qty: 2 },
            { icon: "icons/sun_gray.svg", qty: 2 }
        ]
    }
}