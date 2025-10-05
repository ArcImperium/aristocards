function Computer({computerHand}) {
    const computerCardKey = Object.keys(computerHand)[0]
    const computerCardValue = computerHand[computerCardKey]
    
    return(
        <div className='computer'>
            <h1>Dealer</h1>
            {computerCardKey}
            <br/>??
            <hr></hr>
            Score: {computerCardValue}
        </div>
    )   
}

export default Computer