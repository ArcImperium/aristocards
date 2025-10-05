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
                <div key={playerCardKey} className='card'>
                    {playerCardKey}
                </div>
            )
            playerScore += playerCardValue
            continueDisplayPlayerHand += 1
        }

        return {playerHandDisplay, playerScore}
    }

    const {playerHandDisplay, playerScore} = displayPlayerHand()

    return (
        <div className='player'>
            <h1>Player</h1>
            <div className='card-container'>
                {playerHandDisplay}
            </div>
            <hr/>
            Score: {playerScore}
        </div>
    )
}

export default Player