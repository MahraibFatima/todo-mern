import React from 'react'
import '../App.css'

const Update = ({
  display, update, onChange, onSubmit
}) => {
  return (
    <div>
      <div className="p-5 d-flex flex-col justify-content-center align-items-start border border-gray-300 rounded-lg fixed-width bg-white shadow-md update">
        <h2 className="text-2xl font-bold mb-4">Update Todo</h2>
        <input
          type="text"
          name="title"
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
          value={update.title || ''}
          onChange={onChange}
        />
        <textarea
          name="description"
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3 resize-none"
          rows="4"
          value={update.description || ''}
          onChange={onChange}
        ></textarea>
        <div>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
            onClick={onSubmit}
          >
            Update Todo
          </button>
          <button 
            className="bg-red-500 mx-3 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200" 
            onClick={() => {
              display("none");
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Update