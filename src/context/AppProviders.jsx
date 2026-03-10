import { TodoProvider } from "./TodoContext";
import { FilterProvider } from "./FilterContext";
import { ThemeProvider } from "./ThemeContext";

export function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <FilterProvider>
        <TodoProvider>{children}</TodoProvider>
      </FilterProvider>
    </ThemeProvider>
  );
}