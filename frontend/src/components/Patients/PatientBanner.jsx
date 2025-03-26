import "../../styles/PatientBanner.scss";

const PatientBanner = ({ text }) => {

  return (
    <div className="patient-banner">
      <div className="patient-heading">{text}</div>
      <img className="search-glass" src="/Search.svg" alt="Search Icon" />
    </div>
  )
}
export default PatientBanner;
