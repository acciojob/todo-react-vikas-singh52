

import React,{useState} from "react";
import './../styles/App.css';

const AddTask  = ({taskList, setTaskList}) => {

  let [task, setTask] = useState("");

  function addTask(e){
      e.preventDefault();
      let lastEle = taskList[taskList.length-1]
      let lastId = lastEle? lastEle.id:0
      let obj = {
        id: lastId + 1,
        taskN: task
      }
      setTaskList([...taskList, obj])
  }

  return (

    <div>
        <form onSubmit={addTask}>
          <h2>To-Do-List</h2>
          <input type="text" onChange={(e)=>setTask(e.target.value)}/>
          <button> Add Todo </button>
        </form>
    </div>
  )
}
export default AddTask
