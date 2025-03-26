import useHealth from "../../context/useHealth";
import "../../styles/Person.scss";

const Person = () => { 
  const { healthData } = useHealth();
  const data = {
    profileUrl: healthData.jessica.profile_picture,
    name: healthData.jessica.name
  }

  return (
    <div className="person">
      <img src={data.profileUrl} alt={data.name + "'s Profile Picture"} className="person-pp" />
      <div className="name">{data.name}</div>
    </div>
  )

}

export default Person;
