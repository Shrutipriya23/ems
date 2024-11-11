import React from 'react'
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from './CompleteTask';
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  return (
    <div className="h-[55%] overflow-x-auto flex items-center  gap-5 flex-nowrap justify-start  w-full py-5 mt-10">
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
