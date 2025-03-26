import "../../styles/LabCard.scss";

import LabList from "./LabList";
import LabTitle from "./LabTitle";

const LabCard = () => { 
  
  return (
    <div className="lab-card">
      <LabTitle text={"Lab Results"} />
      <LabList />
    </div>
  )

}

export default LabCard;