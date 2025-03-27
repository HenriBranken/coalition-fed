import "../../../styles/BPChartLatestStats.scss";
import BPChartLatestStat from "./BPChartLatestStat";
import useHealth from "../../../context/useHealth";

const BPChartLatestStats = () => {
  const { healthData } = useHealth();
  const systolic = healthData.systolic;
  const diastolic = healthData.diastolic;

  return (
    <div className="bp-chart-latest-stats">
      <BPChartLatestStat backgroundColor="#e66fd2" latestValue={systolic.value} legendName="Systolic" description={systolic.level} />
      <div className="horiz-sep"></div>
      <BPChartLatestStat backgroundColor="#8c6fe6" latestValue={diastolic.value} legendName="Diastolic" description={diastolic.level} />
    </div>
  );
};

export default BPChartLatestStats;