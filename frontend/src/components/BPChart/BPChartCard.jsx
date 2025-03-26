import "../../styles/BPChartCard.scss";
import BPChartLatestStats from "./BPChartLatestStats";
import BPGraph from "./BPGraph";

const BPChartCard = () => {

  return (
    <div className="bp-chart-card">
      <BPGraph />
      <BPChartLatestStats />
    </div>
  );
};

export default BPChartCard;