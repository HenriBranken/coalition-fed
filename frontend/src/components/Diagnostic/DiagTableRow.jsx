import "../../styles/DiagTableRow.scss";

const DiagTableRow = ({ name, description, status }) => {

  return (
    <div className="diag-table-row">
      <div className="col-1-row">{name}</div>
      <div className="col-2-row">{description}</div>
      <div className="col-3-row">{status}</div>
    </div>
  );
};

export default DiagTableRow;