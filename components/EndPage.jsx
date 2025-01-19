const EndPage = ({classes, playAgain, nextLevel, prevLevel, gameLevel}) => {
    let netLvlBtn;
    let prevLvlBtn;

    if(gameLevel == 1) {
        netLvlBtn = "button endPageBtn";
        prevLvlBtn = "hidden";

    }else {
        prevLvlBtn = "button endPageBtn"
        netLvlBtn = "hidden";
    }


    return ( 
        <section id="endPage" className={classes}>
            <h1>Level Complete!</h1>
            <button class="button endPageBtn" onClick={playAgain}>Play Again</button>
            <button class={netLvlBtn} onClick={nextLevel}>Next Level</button>
            <button class={prevLvlBtn} onClick={prevLevel}>Previous Level</button>
        </section>
     );
}