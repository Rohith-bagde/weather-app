export default function LocationButton({
  onLocation,
}) {
  return (
    <button
      onClick={onLocation}
      className="
      bg-green-600
      hover:bg-green-700
      px-5
      py-3
      rounded-lg
    "
    >
      📍 Use My Location
    </button>
  );
}