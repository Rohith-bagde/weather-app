export default function HourlyForecast({
  weather,
}) {
  if (!weather) return null;

  const hours =
    weather.weather.hourly.time.slice(
      0,
      12
    );

  const temps =
    weather.weather.hourly
      .temperature_2m.slice(0, 12);

  return (
    <div className="mt-10">

      <h2 className="text-2xl font-bold mb-4 text-white">
        Hourly Forecast
      </h2>

      <div className="flex gap-4 overflow-x-auto">

        {hours.map(
          (hour, index) => (
            <div
              key={hour}
              className="
              bg-slate-800
              rounded-xl
              p-4
              min-w-[140px]
              text-white
              "
            >
              <p>
                {new Date(
                  hour
                ).getHours()}
                :00
              </p>

              <h3 className="text-3xl mt-3">
                {temps[index]}°
              </h3>
            </div>
          )
        )}

      </div>

    </div>
  );
}