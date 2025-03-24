import PatientTile from "./PatientTile";
import useHealth from "../../context/useHealth";
import "../../styles/PatientList.scss";

const PatientList = () => {
  const { healthData } = useHealth();
  const people = healthData.people;  // List of Patients.

  return (
    <>
      <div className="patient-heading">
        <div>Patients</div>
        <img src="/Search.svg" alt="Search Icon" />
      </div>

      <div className="patient-list">
        {people.map(({ name, gender, age, profile_picture }) => (
          <PatientTile
            key={name.replace(/\s+/g, "")}
            name={name}
            gender={gender}
            age={age}
            picUrl={profile_picture}
          />
        ))}
      </div>
    </>
  )
}

export default PatientList;