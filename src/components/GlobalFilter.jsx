import { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span class="search">
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search records...`}
        style={{
            fontSize: "1.1rem",
            margin: "1rem 0",
            padding: "0.5rem",
            borderRadius: "5px",
            border: "2px solid #6c63ff", // Purple border
            color: "#333", // Grey text color
            outline: "none", // Remove default focus outline
            boxShadow: "0 0 5px rgba(108, 99, 255, 0.5)", // Purple box sha
        }}
      />
    </span>
  );
};

export default GlobalFilter;