import React from "react";

const DisplayTask = ({ taskList, setTaskList}) => {
    
    function deleteTask(id){
        setTaskList(taskList.filter(ele=>ele.id!=id))
    }
  return (
    <ul>
      {taskList.map((ele, ind) => (
        <li key={ele.id}>
          {ele.taskN}
          { console.log(ele.id+" "+ele.taskN) }
          <button onClick={()=>deleteTask(ele.id)}> Delete </button>
        </li>
      ))}
    </ul>
  );
};

export default DisplayTask;
