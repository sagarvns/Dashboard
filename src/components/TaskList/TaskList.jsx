import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {

  if (!data?.tasks) return null;

  return (
    <div
      id="tasklist"
      className="flex flex-nowrap overflow-x-auto gap-5 py-5 mt-10 rounded-xl bg-gray-100 shadow-lg scrollbar"
    >
     
     {data.tasks.map((task)=>{

       if (task.newTask) return <NewTask key={task.id} data={task} />;
        if (task.active) return <AcceptTask key={task.id} data={task} />;
        if (task.complete) return <CompleteTask key={task.id} data={task} />;
        if (task.field) return <FailedTask key={task.id} data={task} />;
        return null;
     })}

 

    </div>
  );
};

export default TaskList;
