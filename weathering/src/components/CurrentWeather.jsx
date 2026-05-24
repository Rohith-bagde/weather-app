import { motion } from "framer-motion";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather({
  weather,
}) {
  if (
    !weather ||
    !weather.weather ||
    !weather.weather.current
  ) {
    return null;
  }

  const current =
    weather.weather.current;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [0, -4, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="
      bg-slate-800/90
      backdrop-blur-lg
      rounded-3xl
      p-6
      mt-6
      shadow-2xl
      border
      border-slate-700
      "
    >
      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-4xl font-bold text-white">
            {weather.location.name}
          </h2>

          <p className="text-slate-300">
            {weather.location.country}
          </p>
        </div>

        <WeatherIcon
          temperature={
            current.temperature_2m
          }
        />

      </div>

      {/* Temperature */}

      <div className="mt-5">

        <span
          className="
          text-6xl
          md:text-7xl
          font-black
          text-white
          leading-none
          "
        >
          {Math.round(
            current.temperature_2m
          )}
        </span>

        <span
          className="
          text-3xl
          text-slate-300
          ml-1
          "
        >
          °C
        </span>

      </div>

      {/* Weather Stats */}

      <div className="grid grid-cols-2 gap-4 mt-8">

        <div
          className="
          bg-slate-700/60
          p-4
          rounded-2xl
          "
        >
          <p className="text-slate-300">
            Humidity
          </p>

          <h3 className="text-2xl text-white font-semibold">
            {
              current.relative_humidity_2m
            }
            %
          </h3>
        </div>

        <div
          className="
          bg-slate-700/60
          p-4
          rounded-2xl
          "
        >
          <p className="text-slate-300">
            Wind Speed
          </p>

          <h3 className="text-2xl text-white font-semibold">
            {Math.round(
              current.wind_speed_10m
            )}
            km/h
          </h3>
        </div>

      </div>
    </motion.div>
  );
}