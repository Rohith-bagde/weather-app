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
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: [0, -6, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="
      bg-slate-800/90
      backdrop-blur-lg
      rounded-3xl
      p-8
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

      <h1
        className="
        text-8xl
        font-black
        mt-6
        text-white
        "
      >
        {Math.round(
          current.temperature_2m
        )}
        °C
      </h1>

      <div className="grid md:grid-cols-3 gap-4 mt-8">

        <div className="bg-slate-700/60 p-4 rounded-2xl">
          <p className="text-slate-300">
            Humidity
          </p>

          <h3 className="text-3xl text-white">
            {
              current.relative_humidity_2m
            }
            %
          </h3>
        </div>

        <div className="bg-slate-700/60 p-4 rounded-2xl">
          <p className="text-slate-300">
            Wind
          </p>

          <h3 className="text-3xl text-white">
            {Math.round(
              current.wind_speed_10m
            )}
            km/h
          </h3>
        </div>

        <div className="bg-slate-700/60 p-4 rounded-2xl">
          <p className="text-slate-300">
            Temperature
          </p>

          <h3 className="text-3xl text-white">
            {Math.round(
              current.temperature_2m
            )}
            °C
          </h3>
        </div>

      </div>
    </motion.div>
  );
}