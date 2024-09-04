import { useState } from "react";
import { toast } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ handleSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search query.");
      return;
    }
    handleSubmit(query);
    setQuery("");
  };

  return (
    <form onSubmit={onSubmit} className={css.searchBarForm}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search movies"
        className={css.searchBarInput}
      />
      <button type="submit" className={css.searchBarButton}>
        Search
      </button>
    </form>
  );
}
