import {
  Line,
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function WeatherChart({
  weather,
}) {
  if (
    !weather?.weather?.hourly
  )
    return null;

  const labels =
    weather.weather.hourly.time.slice(
      0,
      12
    );

  const temperatures =
    weather.weather.hourly
      .temperature_2m.slice(0, 12);

  const data = {
    labels: labels.map(
      (item) =>
        `${new Date(
          item
        ).getHours()}:00`
    ),
    datasets: [
      {
        label:
          "Temperature °C",
        data: temperatures,
        borderColor:
          "#3b82f6",
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
    },

    scales: {
      x: {
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "#334155",
        },
      },

      y: {
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "#334155",
        },
      },
    },
  };

  return (
    <div
      className="
      bg-slate-800
      p-6
      rounded-xl
      mt-8
      "
    >
      <h2 className="text-2xl font-bold mb-4 text-white">
        Temperature Trend
      </h2>

      <Line
        data={data}
        options={options}
      />
    </div>
  );
}