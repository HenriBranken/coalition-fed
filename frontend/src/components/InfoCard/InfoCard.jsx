import ShowButton from "./ShowButton";
import InfoList from "./InfoList";
import Person from "./Person";
import "../../styles/InfoCard.scss";

const InfoCard = () => {
  return (
    <div className="info-card">
      <Person />
      <InfoList />
      <ShowButton text="Show All Information" />
    </div>)
}

export default InfoCard;