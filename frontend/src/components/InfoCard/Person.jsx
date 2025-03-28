import useHealth from "../../context/useHealth";
import "../../styles/Person.scss";

const Person = () => { 
  const { healthData } = useHealth();
  const data = {
    name: healthData.person_summary.name
  }

  return (
    <div className="person">
      <img src="/Layer_2.png" srcSet="/Layer_2@2x.png" alt={data.name + "'s Profile Picture"} className="person-pp" />
      <div className="name">{data.name}</div>
    </div>
  )

}

export default Person;
