function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li style={{textDecoration: todo.completed ? "line-through" : "none",display: "flex",alignItems: "center",gap: "1rem"}}>
      <span onClick={() => toggleComplete(todo.id)} style={{ cursor: "pointer" }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </li>
  );
}

export default TodoItem;
