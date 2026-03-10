import { useFilter } from "../context/FilterContext";

function FilterButtons() {
  const { filter, setFilter } = useFilter();

  return (
    <div style={{ marginBottom: "16px", display: "flex", gap: "8px" }}>
      <button onClick={() => setFilter("all")} disabled={filter === "all"}>
        All
      </button>
      <button onClick={() => setFilter("active")} disabled={filter === "active"}>
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        disabled={filter === "completed"}>
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;