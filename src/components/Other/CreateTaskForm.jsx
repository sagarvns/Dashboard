// CreateTaskForm.js
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTaskForm = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  
  const { refreshData } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),  
      title: taskTitle, // Changed to 'title' to match display
      description,
      date,
      assignTo,
      category,
      active: false,
      newTask: true,
      complete: false,
      field: false
    };

    const employees = JSON.parse(localStorage.getItem('employees'));

    if (employees) {
      const updatedEmployees = employees.map(employee => {
        if (employee.firstName === assignTo) {
          return {
            ...employee,
            tasks: [...employee.tasks, newTask],
            taskNumbers: {
              ...employee.taskNumbers,
              newTask: (employee.taskNumbers.newTask || 0) + 1
            }
          };
        }
        return employee;
      });

      localStorage.setItem('employees', JSON.stringify(updatedEmployees));
      refreshData(); // Refresh context data
      
      // Reset form
      setAssignTo('');
      setTaskTitle(''); 
      setDescription('');
      setDate('');
      setCategory('');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-gray-900 border border-blue-500 rounded-2xl w-[350px] p-6 shadow-xl">
        <h2 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
          </svg>
          Create Task
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
            <label className="text-gray-300 text-sm mb-1 block">Task Title</label>
            <input 
              type="text" placeholder="Make a UI design"
              className="w-full bg-gray-800 text-white text-sm p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div>
            <label className="text-gray-300 text-sm mb-1 block">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}
              placeholder="Detailed description of task (Max 500 words)"
              rows={3}
              className="w-full bg-gray-800 text-white text-sm p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none">
            </textarea>
          </div>
          <div>
            <label className="text-gray-300 text-sm mb-1 block">Date</label>
            <input value={date} onChange={(e) => setDate(e.target.value)}
              type="text" placeholder="dd/mm/yyyy"
              className="w-full bg-gray-800 text-white text-sm p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div>
            <label className="text-gray-300 text-sm mb-1 block">Assign To</label>
            <input value={assignTo} onChange={(e) => setAssignTo(e.target.value)}
              type="text" placeholder="Name of person"
              className="w-full bg-gray-800 text-white text-sm p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div>
            <label className="text-gray-300 text-sm mb-1 block">Category</label>
            <input value={category} onChange={(e) => setCategory(e.target.value)}
              type="text" placeholder="Design, Development, etc..."
              className="w-full bg-gray-800 text-white text-sm p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <button type="submit" className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskForm;