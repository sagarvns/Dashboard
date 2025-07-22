import React, { useContext } from "react";
import Header from "../Other/Header";
import TaskListNumber from "../Other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
import { AuthContext } from "../../context/AuthProvider";

const EmployeeDashBoard = () => {
  

  const { employees } = useContext(AuthContext);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const userData = employees?.find(e => e.id === loggedInUser?.data?.id);

  return (


    <div className="p-10 bg-[#1C1C1E] min-h-screen">
    

    <div className="flex items-end justify-center mb-4">
      <h1 className="text-2xl font-bold text-white m-2 p-2">
       <span className="text-3xl font-semibold text-white m-2 p-2"> Employee  Fome  📒</span>
      </h1>
    </div>


  <Header data={userData} />
      <TaskListNumber data={userData} />
      <TaskList data={userData} />
      
    </div>
  );
};

export default EmployeeDashBoard;


