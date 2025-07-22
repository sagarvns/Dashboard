import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
      <div className="bg-red-400 rounded-xl py-6 px-4 md:px-6">
        <h2 className="text-3xl text-white font-bold text-center">{data.taskNumbers.active}</h2>
        <h3 className="text-xl text-white font-semibold text-center">Task Active</h3>
      </div>

      <div className="bg-blue-400 rounded-xl py-6 px-4 md:px-6">
        <h2 className="text-3xl text-white font-bold text-center">{data.taskNumbers.newTask}</h2>
        <h3 className="text-xl text-white font-semibold text-center">New Task</h3>
      </div>

      <div className="bg-green-400 rounded-xl py-6 px-4 md:px-6">
        <h2 className="text-3xl text-white font-bold text-center">{data.taskNumbers.complete}</h2>
        <h3 className="text-xl text-white font-semibold text-center">Task Complete</h3>
      </div>

      <div className="bg-yellow-400 rounded-xl py-6 px-4 md:px-6">
        <h2 className="text-3xl text-white font-bold text-center">{data.taskNumbers.field}</h2>
        <h3 className="text-xl text-white font-semibold text-center">Task Field</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
