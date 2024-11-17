import React from 'react'
import Header from "../Others/Header";
import TaskListNumbers from '../Others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';


const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-white h-[100%] ">
      <Header changeUser={props.changeUser} data={props.data}/>
      
      
      <TaskListNumbers data={props.data}/>
      <div><TaskList data={props.data}/></div>
    </div>
    
  )
}

export default EmployeeDashboard
