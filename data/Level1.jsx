const Level1 = () => {
    return {
        tiles: [
            {icon: "icons/water_drop.svg", id: 1, nbTiles: 2},
            {icon: "icons/tool.svg", id: 2, nbTiles: 2},
            {icon: "icons/sun.svg", id: 3, nbTiles: 2},
            {icon: "icons/dirt.svg", id: -1, nbTiles: 3}
        ],
        resources: [
            { icon: "icons/water_drop_gray.svg", qty: 1 },
            { icon: "icons/tool_gray.svg", qty: 1 },
            { icon: "icons/sun_gray.svg", qty: 1 }
        ]
    }
}