import { useState, useEffect } from "react";
import TodoCards from "./TodoCards";
import { toast } from "react-toastify";
import Update from "./Update";
import axios from "axios";
import '../App.css';

const TodoList = () => {
  const id = sessionStorage.getItem("id");
  const [todos, setTodos] = useState([]); 
  const [inputs, setInputs] = useState({ 
    title: "",
    description: "",
  });
  const [showUpdate, setShowUpdate] = useState(false);
  const [updateData, setUpdateData] = useState({
    title: "",
    description: "",
    id: ""
  });

  const fetchTodos = async () => {
    if (id) {
      try {
        const response = await axios.get(`http://localhost:5000/api/list/get/${id}`);
        if (response.data && response.data.list) {
          setTodos(response.data.list);
        } else {
          setTodos([]);
        }
      } catch (error) {
        console.error("Error fetching todos:", error);
        toast.error("Failed to fetch todos");
      }
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [id]);

  const show = () => {
    document.getElementById("todo-description").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const submit = async () => {
    if (inputs.title === "") {
      toast.error("Title is required.");
      return;
    }

    if (id) {
      try {
        await axios.post("http://localhost:5000/api/list/add", {
          title: inputs.title,
          description: inputs.description,
          id: id
        });

        await fetchTodos();
        
        setInputs({
          title: "",
          description: "",
        });
        toast.success("Todo added successfully!");
      } catch (error) {
        console.error("Error adding todo:", error);
        toast.error("Failed to add todo");
      }
    } else {
      const newTodo = {
        title: inputs.title,
        description: inputs.description,
        id: Date.now()
      };
      
      setTodos([...todos, newTodo]);
      setInputs({
        title: "",
        description: "",
      });
      toast.success("task added temporarily");
      toast.info("Login to save your todos successfully!");
    }
  };

  // Fixed update function
  const handleUpdateClick = (todo) => {
    // Find the todo by id instead of index for better reliability
    const todoToUpdate = todos.find(item => item._id === todo.id || item.id === todo.id);
    if (todoToUpdate) {
      setUpdateData({
        title: todoToUpdate.title,
        description: todoToUpdate.description,
        id: todoToUpdate._id || todoToUpdate.id
      });
      setShowUpdate(true);
      // Hide the update section if you want to use modal instead
      document.querySelector('.todo-update').style.display = "block";
    }
  };

  const handleUpdateSubmit = async () => {
    try {
      await axios.put(`http://localhost:5000/api/list/update/${updateData.id}`, {
        title: updateData.title,
        description: updateData.description
      });
      
      toast.success("Todo updated successfully!");
      setShowUpdate(false);
      document.querySelector('.todo-update').style.display = "none";
      fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
      toast.error("Failed to update todo");
    }
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({
      ...updateData,
      [name]: value,
    });
  };

  const del = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/list/delete/${id}`, {
        data: { id }
      });
      toast.success("Todo deleted successfully!");
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
      toast.error("Failed to delete todo");
    }
  };

  return (
    <>
      <div className="p-8 mt-4">
        <div className="container flex flex-col justify-center items-center">
          <div className="flex flex-col w-full max-w-md">
            <input
              type="text"
              placeholder="Add a new todo"
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onClick={show}
              name="title"
              value={inputs.title}
              onChange={change}
            />
            <textarea
              id="todo-description"
              type="text"
              name="description"
              placeholder="Description"
              className="border border-gray-300 p-3 rounded-lg w-full mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              value={inputs.description}
              onChange={change}
              rows="4"
            />
          </div>
          <div className="flex justify-end w-full max-w-md px-2 py-1">
            <button
              className="bg-[#777C6D] hover:bg-[#777C6D] text-white p-3 rounded-lg w-full mt-3 transition duration-200 ease-in-out font-medium"
              onClick={submit}
            >
              Add Todo
            </button>
          </div>
        </div>
        <div className="mt-8">
          <div className="container-fluid">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {todos && todos.length > 0 ? (
                todos.map((item, index) => (
                  <div key={item._id || index} className="w-full">
                    <TodoCards
                      title={item.title}
                      description={item.description}
                      id={item._id}
                      del_id={del}
                      todoId={item._id}
                      update_id={index}
                      tobeUpdate={() => handleUpdateClick(item)} // Pass the entire todo item
                    />
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-500">No todos found. Add your first todo!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="todo-update p-8 bg-gray-100" style={{ display: 'none' }}>
        <div className="container">
          <Update 
            display={(val) => {
              document.querySelector('.todo-update').style.display = val;
            }} 
            update={updateData}
            onChange={handleUpdateChange}
            onSubmit={handleUpdateSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default TodoList;