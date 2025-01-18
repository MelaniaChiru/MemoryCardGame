const WelcomePage = (props) => {
    const [rulesDisplayed, displayRules] = React.useState(false);

    return (
        <div className="welcome-page">
            <h1>Welcome to <br></br>Sprout Quest!</h1>
            <div className="buttons">
                <button onClick={startGame} class="button">Start</button>
                <button onClick={showRules} class="button">Rules</button>
            </div>
            {rulesDisplayed && <Rules></Rules>}
        </div>
    );

    function showRules(){
        displayRules(true);
    }

    /**
     * sets 'gameStarted' variable to true through setter passes as prop
     * component gets re-rendered and level page is displayed
     */
    function startGame(){
        props.startGame(true);
    }
}