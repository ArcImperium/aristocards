import {useState} from 'react'
import {useEffect} from 'react'
import './App.css'
import Player from './Player.jsx'
import Computer from './Computer.jsx'
import PlayerOption from './PlayerOption.jsx'
import Wager from './Wager.jsx'
import deck from './assets/deck.json'
import coinimg from './assets/coin_img.png'

function App() {
  useEffect(() => {
    document.title='AristoCards'
  }, [])

  const [needHelp, setNeedHelp] = useState(false)

  const [coins, setCoins] = useState(100)
  const [bet, setBet] = useState(coins * 0.5)
  const [lockBet, setLockBet] = useState(false)

  const [playerHand, setPlayerHand] = useState({})
  const [computerHand, setComputerHand] = useState({})
  const [shuffledDeck, setShuffledDeck] = useState([])
  const [winner, setWinner] = useState('In Progress')

  function dealHands() {
    const newPlayerHand = {}
    const newComputerHand = {}
    const newDeck = Object.keys(deck).sort(() => Math.random() - 0.5)

    let dealCard = newDeck.shift()
    newPlayerHand[dealCard] = deck[dealCard]
    dealCard = newDeck.shift()
    newPlayerHand[dealCard] = deck[dealCard]
    dealCard = newDeck.shift()
    newComputerHand[dealCard] = deck[dealCard]
    dealCard = newDeck.shift()
    newComputerHand[dealCard] = deck[dealCard]

    setPlayerHand(newPlayerHand)
    setComputerHand(newComputerHand)
    setShuffledDeck(newDeck)

    setWinner('In Progress')
  }

  const dealt = Object.keys(playerHand).length > 0

  return (
    <>
    <button className='help' onClick={() => setNeedHelp(true)}>?</button>
    {needHelp && (
      <div className='help-overlay'>
        <div className='help-content'>
          <h1>Help</h1>
          <hr/>
          Deal - starts game.
          Bet - how much you're wagering for that turn. <br/>
          Coins - shows your coin balance; win/lose to win/lose coins. <br/>
          Hit - draw another card. <br/>
          Stand - end turn. <br/>
          Change Bet - allows you to change your bet.
          <hr/>
          After ending your turn, the computer will go through its turn and hit/stand. <br/>
          The winner of the game will be calculated and shown at the bottom of the page. <br/>
          If you win, your coin balance will go up by your bet. <br/>
          If you lose, your coin balance will go down by your bet.
          <hr/>
          To win, you must beat the dealer. <br/>
          For the dealer to win, it must draw you. <br/>
          The dealer will only hit if its score is below 17.
          <hr/>
          2 Aces is an automatic loss (just for funsies). <br/>
          The cards are notated as follows: "number""suit". <br/>
          If you don't know how to read it, that sucks.
          <hr/>
          <button className='operatorbutton' onClick={() => setNeedHelp(false)}>OK</button>
        </div>
      </div>
    )}
    {!dealt && (
      <>
      <h1 className='title'>AristoCards</h1>
      <img src={coinimg} className='coin-img'/> <br/>
      </>
    )}
    Coins: {coins}
    <Wager coins={coins} bet={bet} setBet={setBet} lockBet={lockBet}/>
    <div className='operators'>
      <button className='operatorbutton' onClick={() => {dealHands(); setLockBet(true)}}>Deal</button>
      {dealt && (<PlayerOption shuffledDeck={shuffledDeck} setShuffledDeck={setShuffledDeck} playerHand={playerHand} deck={deck} setPlayerHand={setPlayerHand} computerHand={computerHand} setWinner={setWinner} coins={coins} setCoins={setCoins} bet={bet}/>)}
      {winner != 'In Progress' && (
      <button className='operatorbutton' onClick={() => {setLockBet(false); setPlayerHand({}); setComputerHand({}); setWinner('In Progress')}}>Change Bet</button>
      )}
    </div>
    {dealt && (<>
    <Computer computerHand={computerHand}/>
    <Player playerHand={playerHand}/>
    Winner: {winner}
    <br/> Bet: {bet}
    </>)}
    </>
  )
}

export default App
