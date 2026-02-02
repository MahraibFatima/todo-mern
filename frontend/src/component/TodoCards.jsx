import { MdDeleteOutline } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import '../App.css';

const TodoCards = ({ title, description, id, del_id, todoId }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 bg-white group">
      <div className="mb-4">
        <h5 className="font-bold text-lg text-gray-800 mb-2 truncate">
          {title}
        </h5>
        <p className="text-gray-600 text-sm">
          {description ? (
            `${description.substring(0, 30)}${description.length > 30 ? "..." : ""}`
          ) : (
            <span className="text-gray-400 italic">No description</span>
          )}
        </p>
      </div>
      <div className="flex justify-end space-x-3 mt-4">
        <div 
          className="p-2 hover:text-[#777C6D] rounded-full transition-colors duration-200 cursor-pointer" 
          onClick={() => {
            document.querySelector('.todo-update').style.display = "block";
          }}
        >
          <GrDocumentUpdate className="w-5 h-5" title="update" />
        </div>
        <div
          className="p-2 hover:bg-red-50 hover:text-red-600 rounded-full transition-colors duration-200 cursor-pointer"
          onClick={() => {
            del_id(id, todoId); // Pass both index and todoId
          }}
        >
          <MdDeleteOutline className="w-5 h-5" title="delete" />
        </div>
      </div>
    </div>
  );
};

export default TodoCards;