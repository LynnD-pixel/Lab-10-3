import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { useTodos } from "./context/TodoContext";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { clearCompleted } = useTodos();
  const { theme } = useTheme();

  const appStyles = {
    minHeight: "100vh",
    padding: "24px",
    backgroundColor: theme === "light" ? "#ffffff" : "#1f2937",
    color: theme === "light" ? "#000000" : "#ffffff",
  };

  return (
    <div style={appStyles}>
      <h1>Todo App with Context API</h1>

      <ThemeToggleButton />
      <TodoInput />
      <FilterButtons />
      <TodoList />

      <button onClick={clearCompleted} style={{ marginTop: "16px" }}>
        Clear Completed
      </button>
    </div>
  );
}

export default App;