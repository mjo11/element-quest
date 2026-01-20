import { useEffect, useState } from 'react'
import { elements } from '../data/elements'
import Timer from './Timer'

export default function Game({ onFinish }) {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [questionType, setQuestionType] = useState('symbol')

  const current = elements[index]

  // --- Random question type ---
  useEffect(() => {
    const types = ['symbol', 'name', 'number']
    setQuestionType(types[Math.floor(Math.random() * types.length)])
  }, [index])

  // --- Generate choices with correct answer included ---
  let choices = [current]
  while (choices.length < 4) {
    const random = elements[Math.floor(Math.random() * elements.length)]
    if (!choices.includes(random)) choices.push(random)
  }
  choices = choices.sort(() => Math.random() - 0.5)

  // --- Determine value to display on button ---
  const getAnswerValue = (element) => {
    if (questionType === 'symbol') return element.symbol
    if (questionType === 'name') return element.name
    if (questionType === 'number') return element.name // show name for atomic number question
  }

  // --- Question text ---
  const questionText = () => {
    if (questionType === 'symbol') return `What is the symbol of ${current.name}?`
    if (questionType === 'name') return `What is the name of the element with symbol ${current.symbol}?`
    return `What is the element with atomic number ${current.number}?`
  }

  function answer(selected) {
    let s = score
    if (selected === getAnswerValue(current)) s += 10
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
      <h2>{questionText()}</h2>
      {choices.map((e) => (
        <button key={getAnswerValue(e)} onClick={() => answer(getAnswerValue(e))}>
          {getAnswerValue(e)}
        </button>
      ))}
      <p>Score: {score}</p>
    </div>
  )
}
