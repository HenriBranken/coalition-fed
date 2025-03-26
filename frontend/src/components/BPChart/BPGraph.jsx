import BPChart from "./BPChart";
import BPChartTitle from "./BPChartTitle";

const BPGraph = () => {

  return (
    <div className="bp-graph">
      <BPChartTitle text="Blood Pressure" />
      <BPChart />
    </div>
  );
};

export default BPGraph;