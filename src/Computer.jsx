function Computer({computerHand}) {
    const computerCardKey = Object.keys(computerHand)[0]
    const computerCardValue = computerHand[computerCardKey]
    
    return(
        <>
        <h1>Dealer</h1>
        {computerCardKey}
        <br/>??
        <hr></hr>
        Score: {computerCardValue}
        </>
    )   
}

export default Computer