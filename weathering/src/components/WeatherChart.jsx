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
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
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
    weather.weather.hourly.temperature_2m.slice(
      0,
      12
    );

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

        backgroundColor:
          "rgba(59,130,246,0.15)",

        fill: true,

        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        labels: {
          color: "#fff",
        },
      },
    },

    scales: {
      x: {
        ticks: {
          color: "#fff",
        },
        grid: {
          color:
            "rgba(255,255,255,0.05)",
        },
      },

      y: {
        ticks: {
          color: "#fff",
        },
        grid: {
          color:
            "rgba(255,255,255,0.05)",
        },
      },
    },
  };

  return (
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
      <h2 className="text-2xl font-bold text-white mb-4">
        Temperature Trend
      </h2>

      <div className="h-[260px]">
        <Line
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}