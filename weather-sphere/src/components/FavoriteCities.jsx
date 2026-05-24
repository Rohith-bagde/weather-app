import useLocalStorage
from "../hooks/useLocalStorage";

export default function FavoriteCities({
  onSelect,
}) {
  const [
    favorites,
    setFavorites,
  ] = useLocalStorage(
    "favorites",
    [
      "Hyderabad",
      "Mumbai",
      "Delhi",
    ]
  );

  return (
    <div className="mt-6">

      <h2 className="text-xl mb-3">
        Favorite Cities
      </h2>

      <div className="flex gap-3 flex-wrap">

        {favorites.map(
          (city) => (
            <button
              key={city}
              onClick={() =>
                onSelect(city)
              }
              className="
              bg-slate-700
              px-4
              py-2
              rounded-lg
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