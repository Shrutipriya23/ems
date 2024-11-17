import React from 'react'


const AcceptTask = ({data}) => {

  


  return (
    <div id="taskList" className=" flex  flex-col justify-around px-4 h-[300px] w-[300px] p-2 bg-yellow-400  rounded-xl">
            <div className="flex justify-between ">
                <h3 className="bg-yellow-600 px-5 py-2 text-xl rounded">{data.category}</h3>
                <h4 className="text-xl">{data.date}</h4>
            </div>
            <h2 className=" text-3xl font-semibold">{data.title}</h2>
            <p className="text-medium ">{data.description}</p>
            <div className=" flex justify-between mt-4 ">

            <button className="py-2 px-2 text-sm bg-green-500 rounded-md">Mark as Completed</button>
          
            <button className="py-2 px-2 text-sm bg-red-500 rounded-md">Mark as Failed</button>


          </div>
    </div>

  )
}

export default AcceptTask
