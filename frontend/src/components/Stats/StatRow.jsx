import StatCard from "./StatCard";
import useHealth from "../../context/useHealth";
import "../../styles/StatRow.scss";

const StatRow = () => {
  const { healthData } = useHealth();
  const latest_stats = healthData.jessica.latest_stats;

  const data = [
    { name: "respiratory-rate", statPicUrl: "RespiratoryRate.svg", heading: "Respiratory Rate", unit: " bpm", data: latest_stats.respiratory_rate },
    { name: "temperature", statPicUrl: "Temperature.svg", heading: "Temperature", unit: "°F", data: latest_stats.temperature },
    { name: "heart-rate", statPicUrl: "HeartBPM.svg", heading: "Heart Rate", unit: " bpm", data: latest_stats.heart_rate }
  ]

  return (
    <div className="stat-row">
      {data.map((entry) => (
        <StatCard key={entry.name} name={entry.name} statPicUrl={entry.statPicUrl} heading={entry.heading} unit={entry.unit} data={entry.data} />
      ))}
    </div>
  )
}

export default StatRow;
