import styles from './App.module.css'
import React from 'react'

function App() {
  const [contents, setContents] = React.useState("")
  const [todoList, setTodoList] = React.useState([])
  function submit() {
    if (contents === "")
      return
    setTodoList([...todoList, contents])
  }
  const onChange = (event) => {
    setContents((current) => event.target.value)
  }
  return (
    <div className={styles.root}>
      <div className={styles.form}>
        <input type="text" value={contents} onChange={onChange} />
        <button onClick={submit}>추가하기</button>
        <h1>Todo List</h1>
      </div>
      <div className={styles.todo}>
        {todoList.map((todo) => {
          return (
            <p>{todo}</p>
          )
        })}
      </div>
    </div>
  );
}

export default App;
