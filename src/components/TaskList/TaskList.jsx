import React from 'react'
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from './CompleteTask'
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  return (
    <div className="h-[95%]  flex items-center  gap-6 flex-wrap justify-space-around w-full px-4 py-5 mt-10 border-none bg-[#f8ffe5] rounded-lg ">
        {data.tasks.map((e,idx)=>{
            if(e.active){
                return <AcceptTask key={idx} data={e}/>
            }
            if(e.new_task){
                return <NewTask  key={idx} data={e}/>
            }
            if(e.complete){
                return <CompleteTask key={idx} data={e}/>
            }
            if(e.failed){
                return <FailedTask key={idx} data={e}/>
            }

        })}
    </div>
  )
}

export default TaskList
