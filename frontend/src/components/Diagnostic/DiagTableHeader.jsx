import "../../styles/DiagTableHeader.scss";

const DiagTableHeader = () => {

  return (
    <div className="diag-table-header">
      <div className="col-1-header">Problem/Diagnosis</div>
      <div className="col-2-header">Description</div>
      <div className="col-3-header">Status</div>
    </div>
  );
};

export default DiagTableHeader;