export default function ForecastCard({
  day,
  max,
  min,
}) {
  return (
    <div
      className="
      bg-slate-800
      rounded-xl
      p-4
      min-w-[180px]
      text-white
      "
    >
      <p className="font-semibold">
        {new Date(
          day
        ).toDateString()}
      </p>

      <div className="mt-4">

        <h3 className="text-3xl font-bold">
          {Math.round(max)}°
        </h3>

        <p className="text-slate-300">
          Min:
          {" "}
          {Math.round(min)}°
        </p>

      </div>
    </div>
  );
}