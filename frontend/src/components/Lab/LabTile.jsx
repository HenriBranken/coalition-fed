import "../../styles/LabTile.scss";

const LabTile = ({ description }) => {

  return (
    <div className="lab-tile">
      <div className="description">
        {description}
      </div>
      <img className="download" src="/Download.svg" alt="Download Icon" />
    </div>
  )

}

export default LabTile;