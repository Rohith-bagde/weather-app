export default function SunriseSunset({
  weather,
}) {
  if (
    !weather?.weather?.daily
      ?.sunrise
  )
    return null;

  const sunrise =
    weather.weather.daily.sunrise[0];

  const sunset =
    weather.weather.daily.sunset[0];

  return (
    <div className="space-y-5">

      <div
        className="
        bg-slate-800/90
        backdrop-blur-lg
        border
        border-slate-700
        rounded-3xl
        p-6
        "
      >
        <div className="text-4xl">
          🌅
        </div>

        <h3 className="text-white text-xl mt-3">
          Sunrise
        </h3>

        <p className="text-3xl font-bold text-white mt-2">
          {new Date(
            sunrise
          ).toLocaleTimeString()}
        </p>
      </div>

      <div
        className="
        bg-slate-800/90
        backdrop-blur-lg
        border
        border-slate-700
        rounded-3xl
        p-6
        "
      >
        <div className="text-4xl">
          🌇
        </div>

        <h3 className="text-white text-xl mt-3">
          Sunset
        </h3>

        <p className="text-3xl font-bold text-white mt-2">
          {new Date(
            sunset
          ).toLocaleTimeString()}
        </p>
      </div>

    </div>
  );
}