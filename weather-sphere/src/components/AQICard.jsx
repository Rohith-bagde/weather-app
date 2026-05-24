export default function AQICard() {
  return (
    <div
      className="
      bg-slate-800
      rounded-xl
      p-6
      mt-8
    "
    >
      <h2 className="text-2xl font-bold">
        Air Quality
      </h2>

      <h1 className="text-5xl mt-4">
        78
      </h1>

      <p className="text-green-400 mt-2">
        Moderate
      </p>
    </div>
  );
}