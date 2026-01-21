import { useState } from 'react';
import React from 'react';
import importedTasks from '../data/tasks.js';

const Lists = () => {
    // Initialize tasks as an empty array to prevent runtime errors
    
      const [inputValue, setInputValue] = React.useState("");
  const [tasks, setTasks] = React.useState(importedTasks);

  const handleAddTask = (e) => {
    e.preventDefault(); // Prevent form submission reload
    const newTask = inputValue.trim();
    if (newTask) {
      const newTasks = [...tasks, { id: tasks.length + 1, task: newTask }];
      setTasks(newTasks);
      console.log("Tasks after update:", newTasks);
      setInputValue("");
    }
  };
// const [tasks, setTasks] = React.useState(importedTasks);
    
    return (
        <div className="max-w-4xl mx-auto px-8 py-12 font-['Inter'] bg-gray-50 min-h-screen">
                  <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
        <form onSubmit={handleAddTask}
        className="flex items-center gap-4 flex-1 min-w-[300px]">
          <input

            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Search or add a new task..."
            className="task-input px-5 py-4 border-2 border-gray-300 rounded-xl w-full text-base bg-white text-gray-900 transition-all duration-300 outline-none shadow-sm focus:border-green-800 focus:shadow-lg focus:shadow-green-800/20"
          />
          <button
            id="submit-btn"
            style={{ backgroundColor: '#777C6D' }}
            className="px-8 py-4 text-white border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap shadow-md hover:bg-green-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-800/30 active:translate-y-0.5"
          >
            Add Task
          </button>
        </form>
      </div>
            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl text-gray-900 font-bold tracking-tight m-0">
                        Tasks
                    </h1>
                </div>
                
                <div className="flex flex-col gap-3">
                    {/* Add conditional rendering to handle empty tasks array */}
                    {tasks.length === 0 ? (
                        <div className="text-center py-16 px-8 text-gray-500 text-lg bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-dashed border-gray-300">
                            <div className="text-5xl mb-4 opacity-60">
                                📝
                            </div>
                            <p className="my-2 text-xl font-semibold">
                                No tasks yet
                            </p>
                            <p className="m-0 text-base max-w-md mx-auto">
                                Start organizing your day by adding your first task
                            </p>
                        </div>
                    ) : (
                        tasks.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 cursor-pointer flex items-center gap-5 relative overflow-hidden hover:shadow-lg hover:-translate-y-1 hover:border-gray-300"
                            >
                                <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-gray-400 flex-shrink-0 transition-all duration-300 relative">
                                    <div className="w-3 h-3 rounded-full bg-transparent transition-all duration-300"></div>
                                </div>
                                <span className="text-lg text-gray-900 flex-1 font-medium tracking-tight">
                                    {item.task}
                                </span>
                                <div className="opacity-0 transition-all duration-300 text-green-800 font-medium text-sm px-4 py-2 bg-gray-50 rounded-lg group-hover:opacity-100">
                                    Click to edit
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            
            <div className="mt-8 text-center text-gray-500 text-sm p-4">
                <p className="m-0">
                    Tip: You can click on any task to edit or mark as complete
                </p>
            </div>
        </div>
    );
};

export default Lists;