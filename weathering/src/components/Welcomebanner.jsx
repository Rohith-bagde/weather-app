export default function WelcomeBanner() {
  const hour =
    new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning ☀️"
      : hour < 18
      ? "Good Afternoon 🌤️"
      : "Good Evening 🌙";

  return (
    <div
      className="
      bg-gradient-to-r
      from-blue-600
      via-cyan-500
      to-blue-700
      rounded-3xl
      p-6
      text-white
      mb-8
      shadow-xl
      "
    >
      <h1 className="text-3xl font-bold">
        {greeting}
      </h1>

      <p className="mt-2 opacity-90">
        Welcome to Weathering.
        Real-time weather insights
        at your fingertips.
      </p>
    </div>
  );
}