import React, { useEffect, useState } from 'react'
import styles from "./ToDoList.module.css"
import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setIsLoading(true);

        const res = await fetch("http://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        console.log(data);

        setTodos(data);
      } catch {
        console.log("error");
      } finally {
        setIsLoading(false);
      }

    }
    fetchTodos();
  }, [])

  if (isLoading) {
    return (
      <div>
        Идет загрузка...
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      {todos.map((item) => (
        <ToDoItem
          {...item}

        />
      ))}
    </div>
  )
}


export default ToDoList