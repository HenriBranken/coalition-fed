import "../../styles/StatCard.scss";
import DynamicText from "../DynamicText";


const StatCard = ({ name, statPicUrl, heading, unit, data }) => { 

  const dataPoint = data.value;
  const dataLevel = data.level;

  return (
    <div className={`stat-card ${name}`}>
      <img src={"/" + statPicUrl} alt={statPicUrl} />
      <div className="stat-heading">{ heading }</div>
      <div className="stat-value">{dataPoint + unit}</div>
      <DynamicText text={dataLevel} />
    </div>
  )
}

export default StatCard;
