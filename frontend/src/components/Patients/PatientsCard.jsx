import "../../styles/PatientsCard.scss";
import PatientBanner from "./PatientBanner";
import PatientList from "./PatientList";

const PatientsCard = () => {

  return (
    <div className="patients-card">
      <PatientBanner text="Patients" />
      <PatientList />
    </div>
  )
}

export default PatientsCard;