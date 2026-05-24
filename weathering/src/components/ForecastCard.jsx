export default function ForecastCard({
  day,
  max,
  min,
}) {
  return (
    <div
      className="
      min-w-[140px]
      bg-slate-900/70
      border
      border-slate-700
      rounded-3xl
      p-5
      text-center
      hover:scale-105
      transition
      "
    >
      <p className="text-white font-bold">
        {new Date(day).toLocaleDateString(
          "en-US",
          {
            weekday:
              "short",
          }
        )}
      </p>

      <div className="text-5xl my-4">
        ☀️
      </div>

      <h3 className="text-3xl font-bold text-white">
        {Math.round(max)}°
      </h3>

      <p className="text-blue-400">
        {Math.round(min)}°
      </p>
    </div>
  );
}