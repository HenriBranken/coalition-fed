import PaneLeft from "../panes/PaneLeft";
import PaneMid from "../panes/PaneMid";
import PaneTop from "../panes/PaneTop";
import PaneRight from "../panes/PaneRight";

import "../styles/PatientsPage.scss";
import Advertise from "../components/Advertise/Advertise";

const PatientsPage = () => {

  return (
    <div className="page-wrapper">
      <div className="patients-page">
        <PaneTop />
        <div className="row-2">
          <PaneLeft />
          <PaneMid />
          <PaneRight />
        </div>
      </div>
      <Advertise />
    </div>
  );
};

export default PatientsPage;