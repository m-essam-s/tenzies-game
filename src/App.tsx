import Die from './components/Die'
import { useState } from 'react'
import './App.css'

const App = () => {

  const [dice, setDice] = useState(allNewDice())

  function allNewDice(): number[] {
    return Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6))
  }

  const diceElement = dice.map((die, index) => {
    return <Die key={index} value={die} />
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
