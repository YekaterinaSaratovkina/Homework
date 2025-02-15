import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Nav.module.css"

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/albums"}>Albums</Link>
      <Link to={"/to-do-list"}>To Do list</Link>
      <Link to={"/form"}>Form</Link>
      <Link to={"/step-form"}>Step form</Link>
      <Link to={"/uncotrolled"}>Uncotrolled Form</Link>

      
    </nav>
  )
}

export default Nav