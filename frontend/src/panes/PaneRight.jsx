import InfoCard from "../components/InfoCard/InfoCard";
import LabCard from "../components/Lab/LabCard";

import "../styles/PaneRight.scss";

const PaneMid = () => {

  return (
    <div className="pane-right">
      <InfoCard />
      <LabCard />
    </div>
  );
};

export default PaneMid;