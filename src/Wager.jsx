function Wager({coins, bet, setBet, lockBet}) {
    return (
        <div>
            {!lockBet && (
                <div className='wager-container'>
                <input className='wager' type="range" min="0" max={coins} bet={bet} onChange={(e) => setBet(Number(e.target.value))}/>
                <br/> Bet: {bet}
                </div>
            )}
        </div>
    )
}

export default Wager