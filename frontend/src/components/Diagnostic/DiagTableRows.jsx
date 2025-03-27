import useHealth from "../../context/useHealth";
import DiagTableRow from "./DiagTableRow";

import "../../styles/DiagTableRows.scss";

const DiagTableRows = () => {
  const { healthData } = useHealth();

  let data = healthData.diagnostic_list;

  // We want to see the vertical scrollbar.
  // Therefore we need more mock data.
  const myOwnList = [
    {
      "name": "Hyperlipidemia",
      "description": "Elevated levels of cholesterol and triglycerides in the blood",
      "status": "Under Treatment"
    },
    {
      "name": "Chronic Kidney Disease",
      "description": "Gradual loss of kidney function over time",
      "status": "Under Observation"
    },
    {
      "name": "Depression",
      "description": "Mood disorder with persistent feelings of sadness",
      "status": "Active"
    },
    {
      "name": "Gastroesophageal Reflux Disease",
      "description": "Stomach acid frequently flows back into the esophagus",
      "status": "Managed"
    },
    {
      "name": "Anemia",
      "description": "A deficiency in red blood cells or hemoglobin",
      "status": "Cured"
    },
    {
      "name": "Sleep Apnea",
      "description": "Interrupted breathing during sleep",
      "status": "Untreated"
    },
    {
      "name": "Psoriasis",
      "description": "Chronic skin condition causing red, scaly patches",
      "status": "Inactive"
    },
    {
      "name": "Coronary Artery Disease",
      "description": "Narrowing or blockage of the coronary arteries",
      "status": "Under Treatment"
    }
  ]
  data = [...data, ...myOwnList];

  return (
    <div className="diag-table-rows">
      {
        data.map((entry) => (
          <DiagTableRow name={entry.name} description={entry.description} status={entry.status} key={entry.name.split(" ").join("").toLowerCase()} />
        ))
      }
    </div>
  );
};

export default DiagTableRows;