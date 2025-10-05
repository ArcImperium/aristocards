import {useState, useEffect} from 'react'
import './App.css'
import Player from './Player.jsx'
import Computer from './Computer.jsx'
import PlayerOption from './PlayerOption.jsx'
import Wager from './Wager.jsx'
import deck from './assets/deck.json'

function App() {
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
