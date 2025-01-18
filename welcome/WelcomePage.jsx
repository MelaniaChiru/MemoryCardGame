const WelcomePage = () => {
    const StartGame = () => {
        console.log("Game Start");
    };

    const StartRules = () => {
        document.querySelector("#rules").style = "display:block";
    }

    return (
        <>
            <h1>Welcome to Sprout Quest!</h1>
            <button onClick={StartGame}>Start</button>
            <button onClick={StartRules}>Rules</button>
        </>
    );
}