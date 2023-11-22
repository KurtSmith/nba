import { useState } from "react"

import styles from "./Counter.module.css"

export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState("2")

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div className={styles.row}>
       
      </div>
    </div>
  )
}
