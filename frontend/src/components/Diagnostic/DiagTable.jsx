import DiagTableHeader from "./DiagTableHeader";
import DiagTableRows from "./DiagTableRows";

import "../../styles/DiagTable.scss";

const DiagTable = () => {

  return (
    <div className="diag-table">
      <DiagTableHeader />
      <DiagTableRows />
    </div>
  );
};

export default DiagTable;