import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div id="taskList" className="  flex  flex-col justify-around px-4 h-[300px] w-[300px] p-2 bg-pink-400 rounded-xl">
            <div className="flex justify-between items-center gap-3">
                <h3 className="bg-pink-600 px-5 py-2 text-xl rounded">{data.category}</h3>
                <h4 className="text-xl">{data.date}</h4>
            </div>
            <h2 className="text-3xl font-semibold">{data.title}</h2>
            <p className="text-medium ">{data.description}</p>
            <div className="mt-3">
                <button className=" py-2 px-2 text-sm  rounded-md bg-red-600">Failed</button>
            </div>
        </div>
        
  )
}

export default FailedTask
