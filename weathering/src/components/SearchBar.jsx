import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({
  onSearch,
}) {
  const [city, setCity] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    onSearch(city);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full"
    >
      <div
        className="
        flex
        items-center
        bg-slate-800/90
        border
        border-slate-700
        rounded-2xl
        overflow-hidden
        "
      >
        <FiSearch
          className="
          ml-5
          text-slate-400
          "
          size={22}
        />

        <input
          type="text"
          value={city}
          onChange={(e) =>
            setCity(e.target.value)
          }
          placeholder="Search city..."
          className="
          flex-1
          bg-transparent
          px-4
          py-5
          outline-none
          text-white
          "
        />

        <button
          type="submit"
          className="
          bg-blue-600
          hover:bg-blue-500
          px-8
          py-5
          font-semibold
          transition
          "
        >
          Search
        </button>
      </div>
    </form>
  );
}