import InfoTile from "./InfoTile";
import useHealth from "../../context/useHealth";
import "../../styles/InfoList.scss";

const InfoList = () => {
  const { healthData } = useHealth();

  const data = healthData.person_summary;
  const genderIcon = data.gender.toLowerCase().trim() == "male" ? "MaleIcon.svg" : "FemaleIcon.svg";
  const date_of_birth = new Date(data.date_of_birth).toLocaleDateString('en-US', { year: "numeric", month: "long", day: "numeric" });

  const loopData = {
    date_of_birth: ["BirthIcon.svg", "Date of Birth", date_of_birth],
    gender: [genderIcon, "Gender", data.gender],
    phone_number: ["PhoneIcon.svg", "Contact Info.", data.phone_number],
    emergency_contact: ["PhoneIcon.svg", "Emergency Contact", data.emergency_contact],
    insurance_type: ["InsuranceIcon.svg", "Insurance Provider", data.insurance_type]
  }

  return (
    <div className="info-list">
      {
        Object.entries(loopData).map(([key, [svgUrl, title, detail]]) => (
          <InfoTile key={key} svgUrl={svgUrl} title={title} detail={detail} />
        ))}
    </div>
  )
}

export default InfoList;