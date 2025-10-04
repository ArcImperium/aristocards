function Wager({coins, bet, setBet, lockBet, setLockBet}) {
    return (
        <div>
            {!lockBet && (
                <>
                <input type="range" min="0" max="50" bet={bet} onChange={(e) => setBet(Number(e.target.value))}/>
                </>
            )}
        </div>
    )
}

export default Wager