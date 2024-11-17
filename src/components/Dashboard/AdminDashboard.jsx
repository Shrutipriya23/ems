import React from 'react'
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from '../Others/AllTask';

const AdminDashboard = (props) => {
  return (
    <div className='h-[100%] w-full  p-10 bg-white'>
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
