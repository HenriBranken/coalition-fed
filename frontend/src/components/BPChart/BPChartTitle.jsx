import "../../styles/BPChartTitle.scss";

const BPChartTitle = ({ text }) => {
  // text should be "Blood Pressure"

  return (
    <div className="bp-chart-title">
      {text}
    </div>
  );
};

export default BPChartTitle;