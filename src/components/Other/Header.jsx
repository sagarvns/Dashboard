import React from "react";

export default function Header({ data }) {

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", '');
    window.location.reload();
  }

  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl sm:text-2xl font-bold text-white">
        Hello, <span className="text-2xl sm:text-3xl font-semibold text-blue-400">{data.firstName} 👋</span>
      </h2>
      <button
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-300"
      >
        Log Out
      </button>
    </div>
  );
}
