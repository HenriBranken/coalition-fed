import DashboardCard from "../components/Dashboard/DashboardCard";
import DiagCard from "../components/Diagnostic/DiagCard";

import "../styles/PaneMid.scss";

const PaneMid = () => {

  return (
    <div className="pane-mid">
      <DashboardCard />
      <DiagCard />
    </div>
  );
};

export default PaneMid;