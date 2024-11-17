import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div id="taskList" className=" flex  flex-col justify-around px-4 h-[300px] w-[300px] p-2 bg-blue-400 rounded-xl">
    <div className="flex justify-between items-center gap-3 ">
        <h3 className="bg-blue-600 px-5 py-2 text-xl rounded">{data.category}</h3>
        <h4 className="text-xl">{data.date}</h4>
    </div>
    <h2 className=" text-3xl font-semibold">{data.title}</h2>
    <p className="text-medium ">{data.description}</p>
    <div className="mt-2">
        <button className="w-full py-2 px-2 rounded-md text-sm">Completed</button>
    </div>
</div>

  )
}

export default CompleteTask
