import React from 'react'
import {useState} from "react"

const NewTask = ({data}) => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
  };
  return (
    <div id="taskList" className={`flex-shrink-0 h-full w-[320px] p-5 ${isAccepted ? 'bg-blue-400' : 'bg-purple-400'} rounded-xl`}>
            <div className="flex justify-between items-center">
                <h3 className="bg-purple-600 px-5 py-2 text-xl rounded">{data.category}</h3>
                <h4 className="text-xl">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-3xl font-semibold">{data.title}</h2>
            <p className="text-medium mt-2">{data.description}</p>
            <div className="mt-4">
                <button onClick={handleAccept} className="py-1 px-2 text-sm  bg-green-600 ">Accept task </button>
            </div>
    </div>
  )
}

export default NewTask
