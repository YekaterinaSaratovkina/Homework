import styles from "./Counter.module.css"
import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handlePlus = () => {
        setCounter(counter + 1);
    }
    const handleMinus = () => {
        setCounter(counter - 1);
    }
    return (
        <div className={styles.counter}>
            <button className={styles.counterBtn} onClick={handleMinus}>-</button>
            Counter: {counter}
            <button className={styles.counterBtn} onClick={handlePlus}>+</button>
        </div>
    )
}

export default Counter
// rafce - разметка
// alt+shift+f-выравнивание