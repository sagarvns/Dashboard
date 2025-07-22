import React from 'react';
import CreateTaskForm from '../Other/CreateTaskForm';
import Header from '../Other/Header';
import AllTask from '../Other/AllTask';

const AdminDashboard = () => {
  // get admin data from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const adminData = loggedInUser?.data; // यह वही data है जो login पर save हुआ था

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Header data={adminData} /> {/* data prop पास कर दिया */}

      <div className="flex-1 flex flex-col items-center mt-10 px-4">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-2 text-center text-black tracking-wide">
          Admin Dashboard
        </h1>
        <CreateTaskForm />
      </div>
      
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
