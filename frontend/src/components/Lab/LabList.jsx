import useHealth from "../../context/useHealth";
import LabTile from "./LabTile";
import "../../styles/LabList.scss";

const LabList = () => {
  const { healthData } = useHealth();
  let data = healthData.jessica.lab_results;

  // In the AdobeXR demo, why are there more tests for Jessica? This does not reflect in her JSON data?
  const myList = ["Urine Test", "Complete Blood Count", "Metabolic Panel", "Lipid Panel", "Liver Function", "Kidney Function", "Thyroid Tests", "Vitamin D Levels", "Iron Studies", "Blood Type", "BNP", "DNA Sequencing", "Karyotype", "Throat Swab", "Hepatitis Panel"];
  data = [...data, ...myList];

  return (
    <div className="lab-list">
      {data.map((description, key) => (
        <LabTile key={key} description={description} />
      ))}
    </div>
  );
};

export default LabList;