import { useEffect, useContext } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CurrentWeather from "../components/CurrentWeather";
import HourlyForecast from "../components/HourlyForecast";
import ForecastCard from "../components/ForecastCard";
import FavoriteCities from "../components/FavoriteCities";
import LocationButton from "../components/LocationButton";
import WeatherChart from "../components/WeatherChart";
import SunriseSunset from "../components/SunriseSunset";
import AQICard from "../components/AQICard";

import useWeather from "../hooks/useWeather";
import { ThemeContext } from "../context/ThemeContext";

export default function Dashboard() {
  const {
    weather,
    loading,
    error,
    fetchWeather,
    fetchCurrentLocation,
  } = useWeather();

  const { darkMode } =
    useContext(ThemeContext);

  useEffect(() => {
    fetchWeather("Hyderabad");
  }, []);

  return (
    <div
      className={
        darkMode
          ? `
            min-h-screen
            bg-gradient-to-br
            from-slate-950
            via-slate-900
            to-blue-950
            text-white
          `
          : `
            min-h-screen
            bg-slate-100
            text-black
          `
      }
    >
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Search Section */}

        <div className="flex flex-col lg:flex-row gap-4 mb-6">

          <div className="flex-1">
            <SearchBar
              onSearch={fetchWeather}
            />
          </div>

          <LocationButton
            onLocation={
              fetchCurrentLocation
            }
          />

        </div>

        {/* Favorite Cities */}

        <FavoriteCities
          onSelect={fetchWeather}
        />

        {/* Loading */}

        {loading && (
          <div className="mt-6 text-lg">
            Loading weather...
          </div>
        )}

        {/* Error */}

        {error && (
          <div className="mt-6 text-red-400">
            {error}
          </div>
        )}

        {/* Dashboard */}

        {weather && (
          <>
            {/* TOP GRID */}

            <div
              className="
              grid
              lg:grid-cols-2
              gap-6
              mt-8
              "
            >
              <CurrentWeather
                weather={weather}
              />

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
                <h2
                  className="
                  text-3xl
                  font-bold
                  text-white
                  mb-6
                  "
                >
                  5-Day Forecast
                </h2>

                <div className="flex gap-4 overflow-x-auto">

                  {weather.weather.daily.time
                    .slice(0, 5)
                    .map(
                      (
                        day,
                        index
                      ) => (
                        <ForecastCard
                          key={day}
                          day={day}
                          max={
                            weather
                              .weather
                              .daily
                              .temperature_2m_max[
                              index
                            ]
                          }
                          min={
                            weather
                              .weather
                              .daily
                              .temperature_2m_min[
                              index
                            ]
                          }
                        />
                      )
                    )}

                </div>
              </div>
            </div>

            {/* MIDDLE GRID */}

            <div
              className="
              grid
              lg:grid-cols-3
              gap-6
              mt-6
              "
            >
                <div>
                  <SunriseSunset
                    weather={weather}
                  />
                </div>

                <div className="self-start">
                  <HourlyForecast
                    weather={weather}
                  />
                </div>
            </div>

            {/* BOTTOM GRID */}

              <div
                className="
                grid
                lg:grid-cols-[280px_1fr]
                gap-6
                mt-6
                items-start
                "
              >
              <WeatherChart
                weather={weather}
              />

              <AQICard />
            </div>

            {/* Footer */}

            <div
              className="
              text-center
              text-slate-400
              mt-10
              pb-4
              "
            >
              Made with ❤️ for Weathering
            </div>
          </>
        )}

      </div>
    </div>
  );
}