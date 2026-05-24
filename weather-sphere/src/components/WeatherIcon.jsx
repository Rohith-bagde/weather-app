import {
  WiDaySunny,
  WiCloud,
  WiRain,
} from "react-icons/wi";

export default function WeatherIcon({
  temperature,
}) {
  if (temperature > 30)
    return (
      <WiDaySunny size={80} />
    );

  if (temperature > 20)
    return <WiCloud size={80} />;

  return <WiRain size={80} />;
}