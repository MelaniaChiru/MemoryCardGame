const EndPage = ({classes, playAgain, nextLevel}) => {
    return ( 
        <section id="endPage" className={classes}>
            <h1>Level Complete!</h1>
            <button class="button" onClick={playAgain}>Play Again</button>
            <button class="button" onClick={nextLevel}>Next Level</button>
        </section>
     );
}