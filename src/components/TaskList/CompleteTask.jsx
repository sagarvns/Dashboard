import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="w-[350px] min-h-[250px] bg-green-400 rounded-2xl p-4 flex flex-col justify-between shadow-md hover:shadow-xl hover:scale-[1.02] transform transition duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-3">
          <h1 className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {data.category}
          </h1>
          <h2 className="text-white text-sm font-medium">{data.date}</h2>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-1">{data.title}</h3>
          <p className="text-white text-sm opacity-90">
            {data.description}
          </p>
        </div>

         <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Completed
          </button>
         
        </div>
      </div>

  )
}

export default CompleteTask