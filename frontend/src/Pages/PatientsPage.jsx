import PaneLeft from "../panes/PaneLeft";
import PaneMid from "../panes/PaneMid";
import PaneTop from "../panes/PaneTop";
import PaneRight from "../panes/PaneRight";

import "../styles/PatientsPage.scss";

const PatientsPage = () => {

  return (
    <div className="patients-page">
      <PaneTop />
      <div className="row-2">
        <PaneLeft />
        <PaneMid />
        <PaneRight />
      </div>
    </div>
  );
};

export default PatientsPage;