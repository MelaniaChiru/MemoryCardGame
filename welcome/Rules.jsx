const Rules = ({classes, hideRulesFunc}) => {    
    return ( 
        <section id="rules" class={classes}>
            <button onClick={hideRulesFunc} class="button button--small button--close" title="close rules">X</button>
            <section id="text">
                <h2>Welcome to Sprout Quest, a fun and engaging card-matching game where your memory and strategy help grow a beautiful plant!</h2>
                <h3>Objective:</h3>
                <p>Match pairs of resource cards to unlock materials needed to grow your plant. Each successful match will contribute to your plant's progress. But be careful—there are "dirt" cards that don’t match, and they won’t help your plant grow!</p>
                <h3>How to Play:</h3>
                <ol>
                    <li>Card Matching:</li>
                        <ul>
                            <li>Flip over two cards at a time.</li>
                            <li>If the two cards match, you earn a resource to help your plant grow! Resources might include water, sunlight, or nutrients.</li>
                        </ul>
                    <li>Dirt Cards:</li>
                        <ul>
                            <li>If you flip over a "dirt" card, it doesn’t have a match. It won’t help your plant, but don’t worry—you can keep playing until you find the matching pairs.</li>
                        </ul>
                    <li>Level Progression</li>
                        <ul>
                            <li>Each level requires a specific number of matches to unlock all the resources needed to complete that stage of your plant's growth.</li>
                            <li>As you progress, the number of cards increases, and the challenge grows!</li>
                        </ul>
                    <li>Winning the Game:</li>
                        <ul>Complete all levels by finding the required matches and growing your plant to its full potential. Watch as it blossoms into something amazing with your hard work and focus!</ul>
                </ol>
                <h3>Tips for Success:</h3>
                    <ul>
                        <li>Remember Card Positions: Try to remember where each card is to make matching faster. </li>
                        <li>Avoid Dirt Cards: While they don’t harm your progress, flipping fewer dirt cards will save you time and effort.</li>
                    </ul>
                <p>Are you ready to test your memory and grow a gorgeous plant? Let the matching begin! 🌱</p>
            </section>
        </section>
     );
}