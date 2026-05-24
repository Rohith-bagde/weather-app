export default function HourlyForecast({
  weather,
}) {
  if (!weather?.weather?.hourly)
    return null;

  const hours =
    weather.weather.hourly.time.slice(
      0,
      8
    );

  const temps =
    weather.weather.hourly.temperature_2m.slice(
      0,
      8
    );

  return (
    <div
      className="
      bg-slate-800/90
      backdrop-blur-lg
      border
      border-slate-700
      rounded-3xl
      p-5
      "
    >
      <h2 className="text-2xl font-bold text-white mb-5">
        Hourly Forecast
      </h2>

      <div
        className="
        flex
        justify-between
        items-center
        gap-4
        overflow-x-auto
        "
      >
        {hours.map(
          (hour, index) => (
            <div
              key={hour}
              className="
              flex
              flex-col
              items-center
              min-w-[80px]
              "
            >
              <p className="text-slate-300 text-sm">
                {new Date(
                  hour
                ).getHours()}
                :00
              </p>

              <div className="text-3xl my-2">
                ☁️
              </div>

              <p className="text-white text-2xl font-bold">
                {Math.round(
                  temps[index]
                )}
                °
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}