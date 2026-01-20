export default function Leaderboard({ onBack }) {
  const scores = JSON.parse(localStorage.getItem('scores') || '[]')

  return (
    <div>
      <h2>🏆 Leaderboard</h2>
      {scores.map((s, i) => (
        <p key={i}>#{i+1} - {s}</p>
      ))}
      <button onClick={onBack}>Back</button>
    </div>
  )
}
