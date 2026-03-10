import { useState } from "react";
import { useTodos } from "../context/TodoContext";

function TodoInput() {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "16px" }}>
      <input
        type="text"
        placeholder="Add a todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", marginRight: "8px", width: "250px" }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoInput;