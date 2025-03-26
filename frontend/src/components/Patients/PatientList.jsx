import PatientTile from "./PatientTile";
import useHealth from "../../context/useHealth";
import "../../styles/PatientList.scss";

const PatientList = () => {
  const { healthData } = useHealth();
  const people = healthData.people;

  return (
    <div className="patient-list">
      {people.map(({ name, gender, age, profile_picture }) => (
        <PatientTile
          key={name.split(" ").join('')}
          name={name}
          gender={gender}
          age={age}
          picUrl={profile_picture}
        />
      ))}
    </div>)
}

export default PatientList;