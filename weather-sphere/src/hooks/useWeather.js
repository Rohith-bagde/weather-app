import { useState } from "react";

import {
  getWeatherForecast,
  getCurrentLocation,
} from "../services/weatherService";

export default function useWeather() {
  const [weather, setWeather] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const fetchWeather = async (
    city
  ) => {
    try {
      setLoading(true);
      setError("");

      const data =
        await getWeatherForecast(city);

      setWeather(data);
    } catch (error) {
      setError(
        error.message ||
          "Failed to fetch weather"
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchCurrentLocation =
    async () => {
      try {
        setLoading(true);
        setError("");

        const data =
          await getCurrentLocation();

        setWeather(data);
      } catch (error) {
        setError(
          "Unable to get location"
        );
      } finally {
        setLoading(false);
      }
    };

  return {
    weather,
    loading,
    error,
    fetchWeather,
    fetchCurrentLocation,
  };
}