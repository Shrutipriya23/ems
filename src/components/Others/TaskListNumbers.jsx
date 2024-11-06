import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className="flex mt-10 screen justify-between gap-5">
        <div className="px-9 py-6 rounded-xl w-[45%] bg-purple-500">
            <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
            <h3 className="text-xl font-medium">New Task</h3>
        </div>

        <div className="px-9 py-6 rounded-xl w-[45%] bg-yellow-500">
            <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
            <h3 className="text-xl font-medium">Completed Task</h3>
        </div>

        <div className="px-9 py-6 rounded-xl w-[45%] bg-blue-500">
            <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
            <h3 className="text-xl font-medium">Accepted Task</h3>
        </div>

        <div className="px-9 py-6 rounded-xl w-[45%] bg-pink-500">
            <h2 className="text-3xl font-semibold">{data.taskCounts.newfailed}</h2>
            <h3 className="text-xl font-medium">Failed Task</h3>
        </div>
      
    </div>
  )
}

export default TaskListNumbers
