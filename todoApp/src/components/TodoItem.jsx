function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2 text-sm sm:text-base">
      <span
        onClick={() => toggleComplete(todo.id)}
        className={`flex-1 cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 font-bold ml-2"
      >
        ❌
      </button>
    </li>
  );
}



export default TodoItem;
