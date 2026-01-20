export default function Achievements({ score }) {
  return (
    <div>
      <h4>🏅 Achievements</h4>
      {score >= 50 && <p>⚡ Speed Chemist</p>}
      {score >= 100 && <p>🧠 Element Master</p>}
    </div>
  )
}
