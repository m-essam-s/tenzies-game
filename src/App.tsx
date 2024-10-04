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

  const [dice, setDice] = useState(allNewDice())

  function allNewDice(): dieType[] {
    return Array.from(
      { length: 10 },
      () => ({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: true
      })
    )
  }

  const diceElement = dice.map(die => {
    return <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
    />
  })

  const rollDice = () => {
    setDice(allNewDice())
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
