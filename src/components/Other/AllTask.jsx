import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="p-4 space-y-6">
      {authData.employees && authData.employees.map((employee) => (
        <div key={employee.id} className="bg-gray-800 rounded-2xl shadow-lg p-6">
          
          {/* Employee Info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-1">👨‍💻 {employee.firstName}</h2>
              <p className="text-gray-400 text-sm">✉ {employee.email}</p>
            </div>
            <div className="flex gap-4 mt-2 md:mt-0">
              <div className="text-center">
                <p className="text-sm text-gray-400">Active</p>
                <p className="font-semibold text-green-400">{employee.taskNumbers.active}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">New</p>
                <p className="font-semibold text-blue-400">{employee.taskNumbers.newTask}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">Complete</p>
                <p className="font-semibold text-purple-400">{employee.taskNumbers.complete}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">Field</p>
                <p className="font-semibold text-yellow-400">{employee.taskNumbers.field}</p>
              </div>
            </div>
          </div>

          {/* Task list */}
          <div className="grid gap-4 md:grid-cols-2">
            {employee.tasks.map((task) => (
              <div key={task.id} className="bg-gray-700 rounded-xl p-4 shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-white mb-1">{task.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{task.description}</p>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>📅 {task.date}</span>
                  <span>📂 {task.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
