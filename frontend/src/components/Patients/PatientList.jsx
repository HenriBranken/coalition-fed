import PatientTile from "./PatientTile";
import useHealth from "../../context/useHealth";
import "../../styles/PatientList.scss";

const PatientList = () => {
  const { healthData } = useHealth();
  const people = healthData.people;

  const patient = "jessicataylor"

  return (
    <div className="patient-list">
      {people.map(({ name, gender, age, profile_picture }) => (
        <PatientTile
          key={name.split(" ").join('').toLowerCase()}
          name={name}
          gender={gender}
          age={age}
          active={name.split(" ").join("").trim().toLowerCase() === patient}
          picUrl={profile_picture}
        />
      ))}
    </div>)
}

export default PatientList;