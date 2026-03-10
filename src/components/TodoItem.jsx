import { useState } from "react";
import { useTodos } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  function handleSave() {
    editTodo(todo.id, newText);
    setIsEditing(false);
  }

  return (
    <li
      style={{
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      {isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            flexGrow: 1,
          }}
        >
          {todo.text}
        </span>
      )}

      {!isEditing && <button onClick={() => setIsEditing(true)}>Edit</button>}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;