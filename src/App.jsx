import { useState } from 'react'
import Game from './components/Game'
import Leaderboard from './components/Leaderboard'

export default function App() {
  const [view, setView] = useState('menu')
  const [lastScore, setLastScore] = useState(0)

  return (
    <div className="app">
      <h1>⚛️ Element Quest</h1>

      {view === 'menu' && (
        <>
          <button onClick={() => setView('game')}>Start Game</button>
          <button onClick={() => setView('leaderboard')}>Leaderboard</button>
        </>
      )}

      {view === 'game' && (
        <Game onFinish={(s) => { setLastScore(s); setView('menu') }} />
      )}

      {view === 'leaderboard' && (
        <Leaderboard onBack={() => setView('menu')} />
      )}

      <p className="last">Last Score: {lastScore}</p>
    </div>
  )
}
