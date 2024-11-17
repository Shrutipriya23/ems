import React from 'react'
import {useState} from "react"

const NewTask = ({data}) => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
  };
  return (
    <div id="taskList" className={`flex  flex-col justify-around items-center px-4 h-[300px] w-[300px] py-2 rounded-xl  ${isAccepted ? 'bg-blue-400' : 'bg-purple-400'} rounded-xl`}>
            <div className="flex justify-between items-center  gap-3 ">
                <h3 className="bg-purple-600 px-2 py-2 text-xl justify-start rounded">{data.category}</h3>
                <h4 className="text-xl justify-end">{data.date}</h4>
            </div>
            <h2 className=" text-3xl font-semibold">{data.title}</h2>
            <p className="text-medium ">{data.description}</p>
            <div className="mt-4">
                <button onClick={handleAccept} className="py-2 px-2 text-sm  bg-green-600 rounded-md">Accept task </button>
            </div>
    </div>
  )
}

export default NewTask
