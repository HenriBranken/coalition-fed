import DynamicText from "../DynamicText";
import "../../styles/BPChartLatestStat.scss";
import "../../styles/DynamicText.scss";

const BPChartLatestStat = ({ backgroundColor, legendName, latestValue, description }) => {

  return (
    <div className="bp-chart-latest-stat">
      <div className="legend">
        <div className="circle" style={{backgroundColor: backgroundColor}}></div>
        <div className="legend-name">{legendName}</div>
      </div>
      <div className="latest-value">{latestValue}</div>
      <DynamicText text={description} />
    </div>
  );
};

export default BPChartLatestStat;