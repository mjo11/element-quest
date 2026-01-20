import { useEffect, useState } from 'react'
import { elements } from '../data/elements'
import Timer from './Timer'
import Achievements from './Achievements'

export default function Game({ onFinish }) {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)

  const current = elements[index]
  const choices = [...elements].sort(() => Math.random() - 0.5).slice(0, 4)

  function answer(symbol) {
    let s = score
    if (symbol === current.symbol) s += 10
    setScore(s)

    if (index + 1 === elements.length) {
      localStorage.setItem('lastScore', s)
      onFinish(s)
    } else {
      setIndex(index + 1)
    }
  }

  return (
    <div>
      <Timer onTimeUp={() => onFinish(score)} />
      <h2>Symbol of {current.name}</h2>
      {choices.map(e => (
        <button key={e.symbol} onClick={() => answer(e.symbol)}>
          {e.symbol}
        </button>
      ))}
      <p>Score: {score}</p>
      <Achievements score={score} />
    </div>
  )
}
