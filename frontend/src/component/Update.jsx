import React from 'react'
import '../App.css'
const Update = () => {
  return (
    <div>
      <div className="p-5 d-flex flex-col justify-content-center align-items-start border border-gray-300 rounded-lg fixed-width bg-white shadow-md update">
        <h2 className="text-2xl font-bold mb-4">Update Todo</h2>
        <input
          type="text"
          placeholder="Update title"
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
        />
        <textarea
          type="text"
          placeholder="Update description"
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3 resize-none"
          rows="4"
        ></textarea>
        <div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
          Update Todo
        </button>
        <button className="bg-red-500 mx-3 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200" onClick={() => {
          document.querySelector('.todo-update').style.display = "none";
        }}>
          close
        </button>
        </div>
      </div>
    </div>
  )
}

export default Update
