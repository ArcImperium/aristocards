function PlayerOption({shuffledDeck, setShuffledDeck, playerHand, deck, setPlayerHand, computerHand, setWinner, coins, setCoins, bet}) {
    function hit() {
        let nextCard = shuffledDeck[0]
        const restDeck = shuffledDeck.slice(1)
        const updatedPlayerHand = {...playerHand, [nextCard]: deck[nextCard]}

        setPlayerHand(updatedPlayerHand)
        setShuffledDeck(restDeck)
    }
    function stand() {
        const playerHandLength = Object.keys(playerHand).length
        let continuePlayerScore = 0
        let playerScore = 0

        const computerHandLength = Object.keys(computerHand).length
        let continueComputerScore = 0
        let computerScore = 0

        while (continueComputerScore < computerHandLength) {
            const computerCardKey = Object.keys(computerHand)[continueComputerScore]
            const computerCardValue = computerHand[computerCardKey]
            computerScore += computerCardValue
            continueComputerScore += 1
        }

        while (continuePlayerScore < playerHandLength) {
            const playerCardKey = Object.keys(playerHand)[continuePlayerScore]
            const playerCardValue = playerHand[playerCardKey]
            playerScore += playerCardValue
            continuePlayerScore += 1
        }

        if (playerScore <= 21 && playerScore > computerScore) {
            while (computerScore < 17) {
                const nextCard = shuffledDeck.shift()
                computerHand[nextCard] = deck[nextCard]
                computerScore += deck[nextCard]
            }
        }
        
        return calculateWinner(playerScore, computerScore)
    }
    function calculateWinner(playerScore, computerScore) {
        if (playerScore > 21) {
            setCoins(coins - bet)
            return (
                setWinner('Dealer')
            )
        }
        else if (computerScore > 21) {
            setCoins(coins + bet)
            return (
                setWinner('Player')
            )
        }
        else if (playerScore <= computerScore) {
            setCoins(coins - bet)
            return (
                setWinner('Dealer')
            )
        }
        else if (playerScore > computerScore) {
            setCoins(coins + bet)
            return (
                setWinner('Player')
            )
        }   
    }

    return (
        <div>
            <button className='operatorbutton' onClick={hit}>Hit</button>
            <button className='operatorbutton' onClick={stand}>Stand</button>
        </div>
    )
}

export default PlayerOption
