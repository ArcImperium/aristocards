function Player({playerHand}) {
    function displayPlayerHand() {
        const playerHandLength = Object.keys(playerHand).length
        let continueDisplayPlayerHand = 0
        const playerHandDisplay = []
        let playerScore = 0

        while (continueDisplayPlayerHand < playerHandLength) {
            const playerCardKey = Object.keys(playerHand)[continueDisplayPlayerHand]
            const playerCardValue = playerHand[playerCardKey]
            playerHandDisplay.push(
                <div key={playerCardKey}>
                    {playerCardKey}
                </div>
            )
            playerScore += playerCardValue
            continueDisplayPlayerHand += 1
        }
        playerHandDisplay.push(
            <div key={playerScore}>
                <hr></hr>
                Score: {playerScore}
            </div>
        )

        return playerHandDisplay
    }

    return (
        <div className='player'>
            <h1>Player</h1>
            {displayPlayerHand()}
        </div>
    )
}

export default Player