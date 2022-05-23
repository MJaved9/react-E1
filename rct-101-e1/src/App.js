import React from "react";
import TaskHeader from "./components/TaskHeader/TaskHeader";
import { Tasks } from "./components/Tasks";
import AddTask from "./components/AddTask/AddTask"; 
import { Counter } from "./components/Counter";
import "./App.css"
import './data/tasks.json';


function App() {
  return <div className="app">{/* Code Here */}
  <TaskHeader/>
  <AddTask>  
      </AddTask>
  <Tasks>
 </Tasks> 
  <Counter/>
  </div>;
}

export default App;
