import axios from "axios";

const GEO_URL =
  "https://geocoding-api.open-meteo.com/v1/search";

const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast";

export const getCoordinates = async (
  city
) => {
  const response = await axios.get(
    GEO_URL,
    {
      params: {
        name: city,
        count: 1,
        language: "en",
        format: "json",
      },
    }
  );

  if (
    !response.data.results ||
    response.data.results.length === 0
  ) {
    throw new Error("City not found");
  }

  return response.data.results[0];
};

export const getWeatherForecast =
  async (city) => {
    const location =
      await getCoordinates(city);

    const weatherResponse =
      await axios.get(
        WEATHER_URL,
        {
          params: {
            latitude:
              location.latitude,

            longitude:
              location.longitude,

            current:
              "temperature_2m,relative_humidity_2m,wind_speed_10m",

            hourly:
              "temperature_2m",

            daily:
              "temperature_2m_max,temperature_2m_min,sunrise,sunset",

            forecast_days: 7,

            timezone: "auto",
          },
        }
      );

    return {
      location,
      weather:
        weatherResponse.data,
    };
  };

export const getCurrentLocation =
  () => {
    return new Promise(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const {
                latitude,
                longitude,
              } = position.coords;

              const response =
                await axios.get(
                  WEATHER_URL,
                  {
                    params: {
                      latitude,
                      longitude,

                      current:
                        "temperature_2m,relative_humidity_2m,wind_speed_10m",

                      hourly:
                        "temperature_2m",

                      daily:
                        "temperature_2m_max,temperature_2m_min,sunrise,sunset",

                      forecast_days: 7,

                      timezone:
                        "auto",
                    },
                  }
                );

              resolve({
                location: {
                  name:
                    "Current Location",
                  country: "",
                },
                weather:
                  response.data,
              });
            } catch (error) {
              reject(error);
            }
          },
          reject
        );
      }
    );
  };