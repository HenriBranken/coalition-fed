import StatCard from "./StatCard";
import useHealth from "../../context/useHealth";
import "../../styles/StatRow.scss";

const StatRow = () => {
  const { healthData } = useHealth();
  const latest_stats = healthData.jessica.latest_stats;

  const respiratory_rate_data = latest_stats.respiratory_rate;
  const temperature_data = latest_stats.temperature;
  const heart_rate_data = latest_stats.heart_rate;

  return (
    <div className="stat-row">
      <StatCard name="respiratory-rate" statPicUrl="RespiratoryRate.svg" Heading="Respiratory Rate" unit="&nbsp;bpm" data={respiratory_rate_data} />
      <StatCard name="temperature" statPicUrl="Temperature.svg" Heading="Temperature" unit="&deg;F" data={temperature_data} />
      <StatCard name="heart-rate" statPicUrl="HeartBPM.svg" Heading="Heart Rate" unit="&nbsp;bpm" data={heart_rate_data} />
    </div>
  )
}

export default StatRow;