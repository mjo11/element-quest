import { useEffect, useState } from 'react'

export default function Timer({ onTimeUp }) {
  const [time, setTime] = useState(30)

  useEffect(() => {
    if (time === 0) onTimeUp()
    const t = setTimeout(() => setTime(time - 1), 1000)
    return () => clearTimeout(t)
  }, [time])

  return <p>⏱️ Time: {time}s</p>
}
