export default function SunriseSunset({
  weather,
}) {
  if (!weather) return null;

  const sunrise =
    weather.weather.daily.sunrise[0];

  const sunset =
    weather.weather.daily.sunset[0];

  return (
    <div
      className="
      grid
      md:grid-cols-2
      gap-4
      mt-8
      "
    >
      <div
        className="
        bg-slate-800
        p-6
        rounded-xl
        text-white
        "
      >
        <h3 className="text-xl">
          🌅 Sunrise
        </h3>

        <p className="text-2xl mt-3">
          {new Date(
            sunrise
          ).toLocaleTimeString()}
        </p>
      </div>

      <div
        className="
        bg-slate-800
        p-6
        rounded-xl
        text-white
        "
      >
        <h3 className="text-xl">
          🌇 Sunset
        </h3>

        <p className="text-2xl mt-3">
          {new Date(
            sunset
          ).toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}