import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'



const AllTask = () => {

    const [userData]=useContext(AuthContext)
    //console.log(userData.employees)   ...
    if (!userData || !userData.employees) {  //check if user data exists
        return <div>Loading employee tasks...</div>;
    }


  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded">
        <div className="bg-pink-400 mb-2 py-2 px-4 flex justify-between rounded">
            <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
            <h3 className="text-lg font-medium w-1/5">New Task</h3>
            <h5 className="text-lg font-medium w-1/5">Active Task </h5>
            <h5 className="text-lg font-medium w-1/5">Completed Task </h5>
            <h5 className="text-lg font-medium w-1/5">Failed Task </h5>
        </div>

       <div>
       {userData.employees.map((e, idx)=>(
        <div key={idx} className="border-2 border-yellow-100 mb-2 py-2 px-4 flex justify-between rounded">
            <h2 className="text-lg font-medium w-1/5 text-pink-600">{e.firstName}</h2>
            <h3 className="text-lg font-medium w-1/5 text-blue-600">{e.taskCount.new_task}</h3>
            <h5 className="text-lg font-medium w-1/5 text-purple-600">{e.taskCount.active}</h5>
            <h5 className="text-lg font-medium w-1/5 text-green-600">{e.taskCount.completed}</h5>
            <h5 className="text-lg font-medium w-1/5 text-red-600">{e.taskCount.failed}</h5>
        </div>
       ))}
       </div>
        
      
    </div>
  )
}

export default AllTask
