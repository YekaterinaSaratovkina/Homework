import React from 'react'
import styles from './ToDoItem.module.css'

const ToDoItem = (props) => {
    console.log(props);

    return (
        <div className={styles.wrapper}>
            <h4>{props.id}</h4>
            <h3>{props.title}</h3>
        </div>
    )
}

export default ToDoItem