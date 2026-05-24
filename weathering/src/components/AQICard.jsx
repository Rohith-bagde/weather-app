export default function AQICard() {
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
      <h2 className="text-3xl font-bold text-white mb-8">
        Air Quality Index
      </h2>

      <div className="flex flex-col items-center">

        <div
          className="
          w-44
          h-44
          rounded-full
          border-[12px]
          border-green-500
          flex
          items-center
          justify-center
          "
        >
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white">
              42
            </h1>

            <p className="text-green-400">
              Good
            </p>
          </div>
        </div>

        <div className="mt-8 w-full space-y-3">

          <div className="flex justify-between">
            <span className="text-green-400">
              PM2.5
            </span>
            <span className="text-white">
              18 μg/m³
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-green-400">
              PM10
            </span>
            <span className="text-white">
              32 μg/m³
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-green-400">
              O₃
            </span>
            <span className="text-white">
              46 ppb
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}