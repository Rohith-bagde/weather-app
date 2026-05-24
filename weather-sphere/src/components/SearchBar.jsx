import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    onSearch(city.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mb-6"
    >
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) =>
          setCity(e.target.value)
        }
        className="
          flex-1
          p-3
          rounded-lg
          bg-slate-800
          border
          border-slate-700
          text-white
          outline-none
        "
      />

      <button
        type="submit"
        className="
          px-6
          py-3
          bg-blue-600
          rounded-lg
          hover:bg-blue-700
        "
      >
        Search
      </button>
    </form>
  );
}