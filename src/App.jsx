import { useState } from 'react'
import Game from './components/Game'

export default function App() {
  const [view, setView] = useState('menu')
  const [lastScore, setLastScore] = useState(0)
  const [quote, setQuote] = useState('')

  // Define quotes
  const highScoreQuotes = [
    "You're a chemistry champ! Keep conquering!",
    "Courageous GenZ, you’ve got this! 🚀",
    "Science hero unlocked! 🌟"
  ]
  const lowScoreQuotes = [
    "Mistakes are proof you're trying! Keep going!",
    "GenZ power! Don’t give up, try again! 💪",
    "Every failure is a step to mastery!"
  ]

  const getQuote = (score) => {
    const threshold = 50 // adjust depending on total possible score
    if (score >= threshold) {
      return highScoreQuotes[Math.floor(Math.random() * highScoreQuotes.length)]
    } else {
      return lowScoreQuotes[Math.floor(Math.random() * lowScoreQuotes.length)]
    }
  }

  return (
    <div className="app">
      <h1>⚛️ Element Quest</h1>

      {view === 'menu' && (
        <>
          <button onClick={() => setView('game')}>Start Game</button>
          {lastScore > 0 && (
            <>
              <p>Last Score: {lastScore}</p>
              <p><em>{quote}</em></p>
            </>
          )}
        </>
      )}

      {view === 'game' && (
        <Game
          onFinish={(score) => {
            setLastScore(score)
            setQuote(getQuote(score)) // pick a quote
            setView('menu')
          }}
        />
      )}
    </div>
  )
}
