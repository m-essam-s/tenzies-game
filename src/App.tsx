import Die from './components/Die'
import { useState } from 'react'
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
      <div className="dice-container">
        {diceElement}
      </div>
      <button
        className='roll-dice'
        onClick={rollDice}
      >Roll</button>
    </main>
  )
}

export default App
