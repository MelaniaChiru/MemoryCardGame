const  Plant = ({plantLevel}) => {
    const [plantImage, setPlantImage] = React.useState();

    // change plant image every time the plnt level changes
    React.useEffect(()=>{
        getPlantImage();
    },[plantLevel]);
    

    return (
        <div className="plant">
            <img src={plantImage}></img>
        </div>
    );

    /**
     * changes the image source accoring to plant level
     */
    function getPlantImage(){
        if (plantLevel === 1) {
            setPlantImage("/image/level1.1.svg");
        }

        if (plantLevel === 2) {
            setPlantImage("image/level1.2.svg");
        }

        if (plantLevel === 3) {
            setPlantImage("/image/level1.3.svg");
        }

        if (plantLevel === 4) {
            setPlantImage("/image/level1.4.svg");
        }
    }
}