import {useState, useEffect} from 'react'
import './App.css'
import Player from './Player.jsx'
import Computer from './Computer.jsx'
import PlayerOption from './PlayerOption.jsx'
import deck from './assets/deck.json'

function App() {
  const coins = 100

  const [playerHand, setPlayerHand] = useState({})
  const [computerHand, setComputerHand] = useState({})
  const [shuffledDeck, setShuffledDeck] = useState([])
  const [winner, setWinner] = useState('')

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

    setWinner('In Progess')
  }

  useEffect(() => {
    dealHands();
  }, []);

  return (
    <>
    <div className='operators'>
      <button className='operatorbutton' onClick={dealHands}>Deal</button>
      <PlayerOption shuffledDeck={shuffledDeck} setShuffledDeck={setShuffledDeck} playerHand={playerHand} deck={deck} setPlayerHand={setPlayerHand} computerHand={computerHand} setWinner={setWinner}/>
    </div>
    <Computer computerHand={computerHand}/>
    <Player playerHand={playerHand}/>
    Winner: {winner}
    </>
  )
}

export default App
