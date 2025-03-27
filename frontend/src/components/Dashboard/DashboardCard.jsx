import "../../styles/DashboardCard.scss";
import BPChartCard from "./BPChart/BPChartCard";
import StatRow from "./Stats/StatRow";

const DashboardCard = () => {

  return (
    <div className="dashboard-card">
      <div className="dashboard-title">Diagnosis History</div>
      <BPChartCard />
      <StatRow />
    </div>
  );
};

export default DashboardCard;