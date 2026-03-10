import { useTodos } from "../context/TodoContext";
import { useFilter } from "../context/FilterContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useTodos();
  const { filter } = useFilter();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  if (filteredTodos.length === 0) {
    return <p>No todos to display.</p>;
  }

  return (
    <ul style={{ padding: 0, listStyle: "none" }}>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;