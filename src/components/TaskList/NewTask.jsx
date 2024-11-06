import React from 'react'

const NewTask = ({data}) => {
  return (
    <div id="taskList" className=" flex-shrink-0 h-full w-[320px] p-5 bg-purple-400 rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-purple-600 px-5 py-2 text-xl rounded">{data.category}</h3>
                <h4 className="text-xl">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-3xl font-semibold">{data.title}</h2>
            <p className="text-medium mt-2">{data.description}</p>
            <div className="mt-4">
                <button className="py-1 px-2 text-sm">Accept task </button>
            </div>
    </div>
  )
}

export default NewTask