import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  let [count,setcount]=useState(1);
  let plus=()=>{
    count=setcount(count+1);
  }
  let min=()=>{
    if(count>0){
    count=setcount(count-1);
    }
  }
  // sample value to be replaced
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={plus}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={min}>-</button>
    </div>
  );
};

export default Counter;
