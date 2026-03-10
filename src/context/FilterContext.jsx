import { createContext, useContext, useMemo, useState } from "react";

const FilterContext = createContext(null);

export function FilterProvider({ children }) {
  const [filter, setFilter] = useState("all");

  const value = useMemo(
    () => ({
      filter,
      setFilter,
    }),
    [filter]
  );

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}