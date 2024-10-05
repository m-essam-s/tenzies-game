import Die from './components/Die'
import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import { nanoid } from "nanoid"
import './App.css'

type dieType = {
  id: string
  value: number
  isHeld: boolean
}

const App = () => {

  const generateNewDie = (): dieType => {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    }
  }

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    if (dice.every(die => die.value === dice[0].value && die.isHeld)) {
      setTenzies(true)
    } else {
      setTenzies(false)
    }
  }, [dice])

  function allNewDice(): dieType[] {
    return Array.from(
      { length: 10 },
      () => (generateNewDie())
    )
  }

  const diceElement = dice.map(die => {
    return <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      onClick={() => holdDie(die.id)}
    />
  })

  const rollDice = () => {
    console.log(tenzies)
    setDice(oldDice => oldDice.map(die => {
      if (!die.isHeld) {
        return generateNewDie()
      }
      return die
    }))
  }

  const holdDie = (id: string) => {
    console.log(id)
    setDice(oldDice => oldDice.map(die => {
      if (die.id === id) {
        return {
          ...die,
          isHeld: !die.isHeld
        }
      }
      return die
    }))
  }

  return (
    <main>
      {tenzies && <Confetti
        className='confetti'
      />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElement}
      </div>
      <button
        className='roll-dice'
        onClick={tenzies ? () => setDice(allNewDice()) : rollDice}
      >{tenzies ? "New Game" : "Roll"}</button>
    </main>
  )
}

export default App
