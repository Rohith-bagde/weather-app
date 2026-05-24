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
      bg-gradient-to-br
      from-gray-100
      via-white
      to-blue-100
      text-black
    `
}
    >
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">

        {/* Search + Location */}

        <div className="flex flex-col md:flex-row gap-4">

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

        {/* Favorites */}

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
          <div className="mt-6 text-red-500">
            {error}
          </div>
        )}

        {/* Weather Content */}

        {weather && (
          <>
            <CurrentWeather
              weather={weather}
            />

            <SunriseSunset
              weather={weather}
            />

            <WeatherChart
              weather={weather}
            />

            <HourlyForecast
              weather={weather}
            />

            {/* 5 Day Forecast */}

            <div className="mt-10">

              <h2 className="text-3xl font-bold mb-5">
                5 Day Forecast
              </h2>

              <div className="flex gap-4 overflow-x-auto pb-2">

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

            {/* AQI */}

            <AQICard />

          </>
        )}

      </div>
    </div>
  );
}