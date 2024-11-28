import React from 'react'
import { TiTick } from "react-icons/ti"
import { FaPlus } from "react-icons/fa"
import { FaClipboardCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const TaskListNumbers = ({data}) => {
  return (

    <div>
    <div className="h-[50%] w-[100%]  border-t-[25px] border-[#ca6702] border-l-[25px] border-r-[25px] rounded-t-lg mt-4 bg-[#f7ede2]">
    <div className="flex flex-col justify-center items-center">
    <h1 className="text-black  mt-10   text-7xl flex items-center text-shadow-lg">Take Control Of Your</h1>
    <div className="flex">
        <div><h1 className='text-black  text-7xl'> Tasks</h1></div>
        <img src="task.png" alt="Description" className="h-[100px] w-[100px]" />
        <div><h1 className='text-black text-7xl border-b-4 border-gray-600 opacity-25'>Track</h1></div>
    </div>
    </div>
    </div>

  
    <div className="flex  justify-start items-center mt-10  gap-5   rounded-md ">
        <div className=" flex  justify-center items-center px-9 py-6 rounded-xl h-[70px]  w-full  gap-1 bg-purple-500">
            <FaPlus className="h-[30px] w-[20px]"/>
            <h2 className="text-3xl font-semibold">{data.tasks.new_task}</h2>
            <h3 className="text-xl font-medium">New Task</h3>
        </div>

        <div className="flex  justify-center items-center px-9 py-6 rounded-xl h-[70px] w-full  bg-yellow-500">
            <TiTick className="h-[42px] w-[37px]"/>
            <h2 className="text-3xl font-semibold">{data.tasks.completed}</h2>
            <h3 className="text-xl font-medium">Completed Task</h3>
        </div>

        <div className=" flex  justify-center items-center px-9 py-6 rounded-xl h-[70px]  w-full gap-1 bg-blue-500">
            <FaClipboardCheck className="h-[23px] w-[18px]"/>
            <h2 className="text-3xl font-semibold">{data.tasks.active}</h2>
            <h3 className="text-xl font-medium ">Accepted Task</h3>
        </div>

        <div className="flex  justify-center items-center px-9 py-6 rounded-xl h-[70px]  w-full gap-1 bg-pink-500">
            <ImCross className="h-[23px] w-[18px]"/>
            <h2 className="text-3xl font-semibold">{data.tasks.newfailed}</h2>
            <h3 className="text-xl font-medium">Failed Task</h3>
        </div>
      
    </div>
    
    </div>
  )
}

export default TaskListNumbers
