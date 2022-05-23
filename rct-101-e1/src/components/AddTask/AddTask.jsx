import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  let [newTodo,setnewTodo]=useState(""); 
  let [todos,settodos]=useState([]);
  let handlechange=(e)=>{
    newTodo=(e.target.value);
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" placeholder="Add Task...." type="text" onChange={handlechange} />
      <button data-cy="add-task-button" onClick={
        ()=>{
          todos.push(newTodo);
          console.log(newTodo);
          settodos([
            ...todos
          ]);
        }
      }>+</button>
      
      {todos.map((todo)=>{
        <div>{todo.value}</div>
      })}

    </div>
  );
};

export default AddTask;
