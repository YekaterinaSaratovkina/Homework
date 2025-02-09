import React from 'react'
import { Link } from 'react-router-dom'
import styles from './AlbomsItemList.module.css'

const AlbomsItemList = (props) => {
  return (
    <div className={styles.wrapper}>
      <Link to={`/album/${props.id}`}><h1>{props.id}</h1></Link>
      <ul>
        <h4>{props.title}</h4>S
      </ul>
    </div>
  )
}

export default AlbomsItemList