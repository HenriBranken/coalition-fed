import DiagBanner from "./DiagBanner";
import DiagTable from "./DiagTable";

import "../../styles/DiagCard.scss";

const DiagCard = () => {

  return (
    <div className="diag-card">
      <DiagBanner text="Diagnostic List"/>
      <DiagTable />
    </div>
  );
};

export default DiagCard;