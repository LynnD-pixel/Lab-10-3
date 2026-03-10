import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

const TodoContext = createContext(null);

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.newText }
          : todo
      );

    case "CLEAR_COMPLETED":
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
}

function getInitialTodos() {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
}

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, [], getInitialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    if (!text.trim()) return;
    dispatch({ type: "ADD_TODO", payload: text });
  }

  function toggleTodo(id) {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  }

  function deleteTodo(id) {
    dispatch({ type: "DELETE_TODO", payload: id });
  }

  function editTodo(id, newText) {
    if (!newText.trim()) return;
    dispatch({ type: "EDIT_TODO", payload: { id, newText } });
  }

  function clearCompleted() {
    dispatch({ type: "CLEAR_COMPLETED" });
  }

  const value = useMemo(
    () => ({
      todos,
      addTodo,
      toggleTodo,
      deleteTodo,
      editTodo,
      clearCompleted,
    }),
    [todos]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodos() {
  return useContext(TodoContext);
}