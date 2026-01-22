import { useState } from "react";
import TodoCards from "./TodoCards";
import { toast, ToastContainer } from "react-toastify";

const TodoList = () => {
  const [Array, setArray] = useState([]);
  const [Inputs, setInputs] = useState({
    title: "",
    description: "",
  });
  const show = () => {
    document.getElementById("todo-description").style.display = "block";
  };
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...Inputs,
      [name]: value,
    });
  };
  const submit = () => {
    if (Inputs.title === "" && Inputs.description === "") {
      toast.error("Title and description are required.");
      return;
    }
    setArray([...Array, Inputs]);
    setInputs({
      title: "",
      description: "",
    });
    toast.success("Todo added successfully.");
  };
  const del = (id) => {
    const newArray = Array.filter((item, index) => index !== id);
    setArray(newArray);
  };
  return (
    <div className="p-8 mt-4">
      <ToastContainer />
      <div className="container flex flex-col justify-center items-center">
        <div className="flex flex-col w-full max-w-md">
          <input
            type="text"
            placeholder="Add a new todo"
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onClick={show}
            name="title"
            value={Inputs.title}
            onChange={change}
          />
          <textarea
            id="todo-description"
            type="text"
            name="description"
            placeholder="Description"
            className="border border-gray-300 p-3 rounded-lg w-full mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            value={Inputs.description}
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
            {Array &&
              Array.map((item, index) => (
                <div key={index} className="w-full">
                  <TodoCards
                    title={item.title}
                    description={item.description}
                    id={index}
                    del_id={del}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
