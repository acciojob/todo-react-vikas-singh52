
import React,{useState} from "react";
import './../styles/App.css';
import AddTask from "./AddTask";
import DisplayTask from "./DisplayTask";

const App = () => {

  
  let [taskList, setTaskList] = useState([])
  return (

    <div>
        <AddTask taskList={taskList} setTaskList={setTaskList}/>
        <DisplayTask taskList={taskList} setTaskList={setTaskList}/>
    </div>
  )
}
export default App
