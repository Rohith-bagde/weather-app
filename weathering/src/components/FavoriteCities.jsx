import useLocalStorage from "../hooks/useLocalStorage";

export default function FavoriteCities({
  onSelect,
}) {
  const [favorites] =
    useLocalStorage(
      "favorites",
      [
        "Hyderabad",
        "Mumbai",
        "Delhi",
        "London",
      ]
    );

  return (
    <div className="mt-5">

      <div className="flex gap-3 flex-wrap">

        {favorites.map(
          (city) => (
            <button
              key={city}
              onClick={() =>
                onSelect(city)
              }
              className="
              px-5
              py-3
              rounded-2xl
              bg-slate-800/90
              border
              border-slate-700
              hover:border-blue-500
              hover:scale-105
              transition
              "
            >
              {city}
            </button>
          )
        )}

      </div>
    </div>
  );
}