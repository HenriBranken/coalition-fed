import "../../styles/PatientTile.scss";

const PatientTile = ({ name, gender, age, picUrl, active }) => { 
  return (
    <div className={active ? "tile-container active" : "tile-container"}>
      {/* The Patient Profile Picture */}
        <img className="face" src={picUrl} alt={name + "'s Profile Picture"} />
      {/* Text Information */}
      <div className="basic-info">
        <div className="top-line">{name}</div>
        <div className="bottom-line">{gender}, {age}</div>
      </div>
      {/* Horizontal Dots */}
      <img className="horiz-dots" src="/MoreHoriz.svg" alt="Horizontal Dots" />
    </div>
  )
}

export default PatientTile;